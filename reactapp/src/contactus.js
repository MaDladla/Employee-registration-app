import { Link } from "react-router-dom";

function Contact() {
    return(
        <div>
<body class="body4">
    <header class="contHead">
        <div class="title">
     
       <div class="header">
        <Link to="/Home" class="head-left">Logout</Link>
        
        <nav class= "head-right">
        <li> <Link to="/landPage">land page </Link></li> 
   <li><Link to="/aboutus">About us</Link></li> 

</nav>

     </div>
    
     </div>
     </header>
 
<div class="grid-container">

  <h1> Please contant us for more information</h1>
<div class="form2">
  <form action="https://formspree.io/f/mlezboga" method="post">
    <table>
      <tr>
        <td>
          <label for="username" class="label">Your username</label>
          <input name="username" id="username" type="text" required />
        </td>
      </tr>
      <tr>
        <td>
          <label for="email" class="label">Your Email Address</label>
         <input name="Email" id="email" type="email" required/>
        </td>
      </tr>
      <tr>
        <td>
          <label for="message" class="label">Your message</label>
          <input name="message" id="message" type="text" required class="contInput"/>
        </td>
      </tr>
   <tr>
     <td>
         <p>

         </p>
      <button type="submit" class="buton">Submit</button>
     </td>
   </tr>
   </table>
  </form>
</div>
</div>

  <footer>
  <p>
    <strong>Contact Details:</strong><br/>
    <b>Email:</b><Link to="cynthiap16dladla@gmail.com">cynthiap16dladla@gmail.com</Link><br/>
    <b>Phone Number:</b> 0729595846
  </p>
  </footer> 
  
  </body>
  </div>
  );
}
export default Contact;