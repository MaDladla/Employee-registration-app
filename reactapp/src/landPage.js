import lisa from './Pictures/lisa.webp'
import amanda from './Pictures/amanda.png'
import camelia from './Pictures/camelia.jpg'
import nobuhle from './Pictures/nobuhle.jpg'
import carol from './Pictures/carol.jpg'
import azania from './Pictures/Azania.jpg'
import { Link } from 'react-router-dom'
import '../src/Compo/style.css';

function Landpage() {
    return(

<body class="body5">
 <header class="land-head">
  
      <div class="header">
        <Link to="/Home" class="head-left">Logout</Link>
    
<nav class= "head-right">
<li><Link to="/addEmployee">add employee </Link></li>
 <li> <Link to="/contactus">Contact us  </Link></li>  
   <li><Link to="/aboutus">About us</Link></li> 

</nav>
    </div>
  
    
    
 </header>

<div class="empContainer">
  <div class="employees">
<img src={lisa} alt="Pictures" width="200px" height="200px" class="landPic"/>
<div class="employee_info">
    <h1>Lisa</h1>
  <p>Makeup artist<br/>
    Location: Pretoria<br/>
    lisa@costrip.co.za</p>
</div>


  </div>

  <div class="employees">
    <img src={amanda} alt="Pictures" width="200px" height="200px" class="landPic"/>
    <div class="employee_info">
      <h1>amanda</h1>
      <p>Makeup artist<br/>
        Location: Nelspruit<br/>
        amanda@costrip.co.za</p>
    </div>
    
      </div>

      <div class="employees">
        <img src={camelia}alt="Pictures" width="200px" height="200px" class="landPic"/>
        <div class="employee_info">
        <h1>camelia</h1>
        <p>Makeup artist<br/>
          Location: Johannesburg<br/>
          camelia@costrip.co.za</p>
        </div>
          </div>

          <div class="employees">
            <img src={nobuhle} alt="Pictures" width="200px" height="200px" class="landPic"/>
            <div class="employee_info">
            <h1>Nobuhle</h1>
            <p>Makeup artist<br/>
              Location: Belfast<br/>
              Nobuhle@costrip.co.za</p>
            </div>
              </div>

              <div class="employees">
                <img src={carol} alt="Pictures" width="200px" height="200px" class="landPic"/>
                <div class="employee_info">
                <h1>Carol</h1>
                <p>Makeup artist<br/>
                  Location: Pretoria<br/>
                  carol@costrip.co.za</p>
                </div>
                  </div>
                  <div class="employees">
                    <img src={azania} alt="Pictures" width="200px" height="200px" class="landPic"/>
                    <div class="employee_info">
                    <h1>Azania</h1>
                    <p>Makeup artist<br/>
                      Location: durban<br/>
                      Azania@costrip.co.za</p>
                    </div>
                      </div>
                 
</div>
 </body>
    );
}
export default Landpage;