// CSS file for our App component
import './App.css';

// React and useEffect hook for scroll position
import { React,useEffect } from 'react';

// import our components from the Components.js file
import * as Components from './Components';

// setting up the routing for our navbar and components in general
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// animation library
import 'animate.css/animate.min.css';

// image for our background on home page
import background from './images/clubspic.jpg';

// routing for our views 
import {Link} from 'react-router-dom';



// export keyword is used to export a function, class, or variable from a module.
// use <> to return multiple components
export function App() {
  return (
    <Router>
      <Components.NavbarComponent />
      {/* Defining our routes on navbar */}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}


// Defining our views for nav bar
// Brief intro - Highlight projects CTA CONTACT VISUAL APPEAL

function Home() {
  return (
    <>
      <div className="text-center animate__animated animate__backInDown animate_slower vh-100 px-3">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 col-sm-12 mb-4 mb-md-0 animate__animated animate__backInLeft animate__delay-1s">
            <h1 className="fs-1 mt-5 mt-lg-0">Hello, I'm <i>Aaron Dangc</i></h1>
            <br />
            <h1 className="fs-1">I am an aspiring Web Developer and Artist!</h1>
            <br />
            <p className="fs-1">You can find more about me <Link to="/about">here</Link></p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={background} alt="background" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
    <>
      <h1 className='mt-5 pt-5 text-center'>About</h1>
    </>
  );
}

function Resume() {
  return <h1>Resume</h1>;
}

function Projects() {
  return <h1>Projects</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

