import pic from './Pictures/R (10).jpg'
import foundation from './Pictures/foundation.webp'
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <body class="body6">
                    <header class="contHead">
                        <div class="title">
                            
                                    <div class="header">
                                        <Link to="/Home" class="head-left">Logout</Link>
                                        <nav class= "head-right">
                                        <li> <Link to="/landPage">land page </Link></li> 
                        <li> <Link to="/contactus">Contact us  </Link></li>  
                    
                           </nav>

                                    </div>
                             
                        </div>
                    </header>


                    <img src={pic} alt="Pictures" width="220px" height="220px" />

                    <div class="aboutus" >
                        <h1>Cosmatic trip</h1>
                        <p>
                            About Cosmetic trip What We Do We’re a custom cosmetic manufacturing company<br /> that has been trailblazing new industry innovations in beauty for over 5 years,<br /> With sustainability and advanced technology at the forefront of our operations,<br /> we develop and manufacture award-winning cosmetic and skincare products<br /> for the world’s most iconic brands.

                        </p>
                        <img src={foundation} alt="Pictures" width="220px" height="220px" />
                    </div>
            </body >
        </div >
    );
}
export default About;