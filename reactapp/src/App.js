
import './App.css';
// import Register from './Compo/register'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Register from './register';
import Home from './Home';
import newEmployee from './newEmployees';
import React from "react";
import {
  BrowserRouter as Router,

  Switch,
  Route,
  
} from "react-router-dom";
import Landpage from './landPage';
import Contact from './contactus';
import About from './aboutus';
import addEmployee from './addEmployee';
export default function App() {
  return (
    
    <Router>
      
      {/* { <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> } } */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Router>
          <Routes>
        <Route exact path="/" component={Home}></Route> 
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/aboutus" component={About}></Route>
        <Route exact path="/landPage" component={Landpage}></Route> 
        <Route exact path="/contactus"component={Contact}></Route>
        <Route exact path="/update" component={addEmployee}></Route> 
        <Route exact path="/newEmployee" component={newEmployee}></Route> 
        </Routes>
        </Router>
    
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }