import React, {useState, useEffect} from "react";
import Axios from "axios";
import '../src/Compo/style.css';
import { Link } from 'react-router-dom';

function Update() {



    const[name, setName]= useState("");
    const[position, setPosition]= useState("");
    const[location, setLocation]= useState("");
    const[email, setEmail]= useState("");

const[cosList, setList] =useState([]);

    useEffect(()=>{
Axios.get('http://localhost:3001/read').then((response)=>{
console.log(response);

})

    },[])
  
   const addList=()=>{
  
    Axios.post("http://localhost:3001/register", {
    name: name,
    position: position,
    location: location,
    email: email
    })
  
   }; 
    


    return(
        
<body class="body7">

    <header class="contHed">
        <div class="title">
     
       <div class="head">
                  <Link to="/Home" class="head-left">Logout</Link>
                    
                    <nav class= "head-right">
                    <li><Link to="/newEmployee">new employee</Link></li> 
                   <li> <Link to="/landPage" class="head-left">land page</Link></li>
                   <li> <Link to="/contactus">Contact us  </Link></li>  
                     <li><Link to="/aboutus">About us</Link></li> 

              </nav>
     
     </div>
    
     </div>
     </header>
     
     <div class="form">
      <form>
        <div class="name">
       <p>Name</p>
      <input type="text" name="" placeholder="" class="input"
       onChange={(event)=>{
        setName(event.target.value);
      }} 
      />
      </div>
      <div class=" position">
      <p>Position</p>
      <input type="text" name="" placeholder="" class="input"
       onChange={(event)=>{
        setPosition(event.target.value);
      }} 
      />
      </div>
      <div class=" location">
      <p>Location</p>
      <input type="text" name="" placeholder="" class="input"
       onChange={(event)=>{
        setLocation(event.target.value);
      }} 
      />
      </div>
      <div class="email">
      <p>Email</p>
      <input type="text" name="" placeholder="" class="input"
       onChange={(event)=>{
        setEmail(event.target.value);
      }} 
      />
      </div>
      <div>
        <p></p>
      <button class="save" onClick={addList} >Save</button>
    </div>

      
      </form>
      
      </div>   
   
</body>

);
}
export default Update;