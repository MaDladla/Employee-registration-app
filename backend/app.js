// require('dotenv').config()
const express= require("express");
// const dotenv = require('dotenv')
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const allRoutes= require("./model/userModel");


app.use(express.json());
app.use(cors());


// app.use(allRoutes)


mongoose.connect("mongodb://localhost:27017/cosmaticapp", {useNewUrlParser: true, 
// useUnifiedTopology: true
});


app.post("/register", async (req, res) => {
  
  const name =req.body.name;
    const position = req.body.position;
    const location = req.body.location;
    const email = req.body.email;
    
  
  const cosmaticapp = new allRoutes({name: name , position: position, location: location, email: email });
     
  
  try {
        await cosmaticapp.save();
        res.send("inserted data");
       
      } catch (err) {
          console.log(err);
      }
  
  
  });


 app.get("/read", async (req, res)=> {

allRoutes.find({}, (err,result)=>{

if(err){

  res.send(err)
}

res.send(result);

})
 
 });

 app.delete("/delete/:id", async (req,res)=>{

const id = req.params.id;

await allRoutes.findByIdAndRemove(id).exec();
res.send("deleted");
 });

 app.put("/update",async(req,res)=>{
  
  const name =req.body.name;
  const position = req.body.position;
  const location = req.body.location;
  const email = req.body.email;
   const id = req.body.id;
  
      try {
      await AddModel.findById(id,(err,UpdatedData) =>{

       UpdatedData.name=newName;
       UpdatedData.Position=newPosition;
       UpdatedData.location=newLocation;
       UpdatedData.email=newEmail;
       
       UpdatedData.save();
       res.send("update")
           
       })
   } catch (err) {
       console.log(err);
  }
 }); 
  
    

app.listen(3001,()=>{

  console.log("Server running on port 3001");
})


