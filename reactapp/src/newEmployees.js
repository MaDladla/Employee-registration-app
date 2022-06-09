import React, {useState, useEffect} from "react";
import Axios from "axios";
import lisa from './Pictures/lisa.webp'
import { Link } from 'react-router-dom';
import '../src/Compo/style.css';
import axios from "axios";

function Employee() {



    const [cosList, setList] =useState([]);

        useEffect(()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
    setList(response.data);
    
    })
     },[]);

const deleteCosmatic =(id)=>{

axios.delete(`http://localhost:3001/delete/${id}`)

};

    return(

<body class="body5">
 <header class="land-head">
  
      <div class="header">
        <Link to="/Home" class="head-left">Logout</Link>
    
<nav class= "head-right">
<li><Link to="/update">update info  </Link></li>
 <li> <Link to="/contactus">Contact us  </Link></li>  
   <li><Link to="/aboutus">About us</Link></li> 

</nav>
    </div>
  
    
    
 </header>

{cosList.map((val,key)=>{
return(
    <div key={key}>
<div class="empContainer">
  <div class="employees">
<img src={lisa} alt="Pictures" width="200px" height="200px" class="landPic"/>
<div class="employee_info">
    <h1>{val.name}</h1>
  <p>{val.position}<br/>
    Location: {val.location}<br/>
   { val.email}</p>
   <div>
   <button class="delete" >update</button>
   </div>
   <div>
   <button class="delete" onClick={()=>deleteCosmatic(val._id)}>Delete</button>
   </div>
</div>

  </div>
</div>
</div>
);
})}
 </body>

    );
}
export default Employee;