// CSS file for our App component
import './App.css';

// React and useEffect hook for scroll position
import { React,useEffect } from 'react';

// import our components from the Components.js file
import * as Components from './Components';

// setting up the routing for our navbar and components in general
// Browser Router
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// animation library
import 'animate.css/animate.min.css';

// image for our background on home page
import background from './images/clubspic.jpg';

// import profile picture
import profile from './images/profile.jpg';

// import Cosmic Cleanup image
import cosmicCleanup from './images/project/Cosmic.png';

// import Green Serenity image
import greenSerenity from './images/project/GreenSeren.png';

// import Brain Rhapsody image
import brainRhapsody from './images/project/Brain.png';

// import unlocked image
import unlocked from './images/project/Unlocked.png';

// Resume
import pdf from './images/resume/RESUME.pdf';

// CRV
import CRV from './images/resume/CRV.pdf';

// Cover Letter
import coverLetter from './images/resume/CoverLetter.pdf';

import postmortem from './images/resume/Jam1.pdf';

import postmortem2 from './images/resume/Jam2.pdf';

import postmortem3 from './images/resume/Jam3.pdf';


// routing for our views 
import {Link} from 'react-router-dom';

//  import container and such from react bootstrap
import {Container,Row,Col} from 'react-bootstrap';



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
            <h1 className="fs-1">I am a  Web and Game Developer!</h1>
            <br />
            <p className="fs-1">You can find more about me <Link to="/about">here</Link></p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={background} alt="background" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* <div className="text-center animate__animated animate__backInUp animate_slower vh-100 px-3">
        <p className="fs-1">Projects</p>
      </div> */}


    </>
  );
}

function About() {
  useEffect(() => {
    // Scroll to the top of the page when the About component is rendered
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center display-1">About Me</h1>
      <br />

      <div className="row mt-4">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
          
            src={profile}
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '80%', height: 'auto' }}

          />
        </div>
        <br />
        <br />
        <div className="col-lg-6">
          <br />
          <h1>
            Hello! I am Aaron Dangc, a passionate Game/Web Developer based in Central Valley.
            Here, you can learn more about me and my journey.
          </h1>
          <br />
          {/* <h1>
            I am dedicated to creating medias of play in form of games and websites. Feel free to
            explore my projects and get in touch if you have any inquiries.
          </h1> */}
          <h1>
                In the realm of game and web development, I find solace and passion in the intricate dance between lines of code and the birth of virtual worlds. As someone deeply immersed in the world of programming, my journey as a developer is not just a profession but a relentless pursuit of turning ideas into tangible, interactive realities.
          </h1>
          <br/>
          <h1>
          Feel free to
            explore my projects and get in touch if you have any inquiries.
          </h1>
          <br />
          <Link to="/resume">
            <h1>Resume</h1>
          </Link>
          <br />
          <Link to="/projects">
            <h1>Projects</h1>
          </Link>
          <br />
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
          <br />
          <a href='https://github.com/adanglol' target = '_blank' rel='noopener noreferrer'>
            <h1>Github</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

function Resume() {

  return(
    <>
      <h1 className='mt-5 pt-5 text-center display-1'>Resume</h1>
      <p className="text-center">
        <a href={pdf} target="_blank" rel="noopener noreferrer" download>
          <h1>Download Resume</h1>
        </a>
      </p>
      <h1 className='mt-5 pt-5 text-center display-1'>CRV</h1>
      <p className="text-center">
        <a href={CRV} target="_blank" rel="noopener noreferrer" download>
          <h1>Download CRV</h1>
        </a>
      </p>
      <h1 className='mt-5 pt-5 text-center display-1'>Cover Letter</h1>
      <p className="text-center">
        <a href={coverLetter} target="_blank" rel="noopener noreferrer" download>
          <h1>Download Cover Letter</h1>
        </a>
      </p>
      <h1 className='mt-5 pt-5 text-center display-1'>Feel free to check it out!</h1>
    </>
  );
}

function Projects() {
  return(
    <>
    <Container className="mt-5 pt-5">
      <h1 className='text-center display-1'>Projects</h1>
      <br/>
      <Row className="mt-4">
        {/* First column with pictures or carousel */}
        <Col lg={7}>
          {/* Add your picture or carousel component here */}
          {/* For example, if using an image: */}
          <img src={cosmicCleanup} alt="Project 1" className="img-fluid" />
        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Cosmic Cleanup</b></h1>
          <h2>Game that involves being an astronaut in distant future. Cleaning the cosmos one step at a time. As you traverse the different planets to pick up trash a platformer game. The game was created during my CMPM 120 class forming a group of 4.</h2>
          <br/>
          <h2>Technologies used: Phaser.JS</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <a href='https://remogarc.github.io/CMPM120Final/' target="_blank" rel="noopener noreferrer"><h3>Visit project</h3></a>

          {/* Add more projects as needed */}
        </Col>
      </Row>
      <hr className="my-5" />

      {/* Add more rows for additional projects */}
      <Row className="mt-4">
        {/* First column with pictures or carousel */}
        <Col lg={7}>
          {/* Add your picture or carousel component here */}
          {/* For example, if using an image: */}
          <img src={greenSerenity} alt="Project 1" className="img-fluid" />
        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Green Serenity</b></h1>
          <h2>Game that involves using your voice as an input for play as well as listening to sound. It is an anthology of mini-games. The inspiration behind this project was for my second Jam for my Artg 170 class where we have to form a group and choose a reading based on fluxist or Sonic Meditations. We chose sonic meditations which relies on sound and thus led to this project and creation.</h2>
          <br/>
          <h2>Technologies used: Phaser.JS</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <a href='https://adanglol.github.io/green-serenity/' target="_blank" rel="noopener noreferrer"><h3>Visit project</h3></a>
          <a href={postmortem} target="_blank" rel="noopener noreferrer" download>
          <h3>Post Mortem</h3>
          </a>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        {/* First column with pictures or carousel */}
        <Col lg={7}>
          {/* Add your picture or carousel component here */}
          {/* For example, if using an image: */}
          <img src={brainRhapsody} alt="Project 1" className="img-fluid" />
        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Brain Rhapsody</b></h1>
          <h2>Bullet Hell style game. Story takes place within a lecture hall as you take some candies and start tripping out. Suddenly monsters come to get you. You have 4 forms and have to swap between each one to fight the horde. This game was created during the second Jam for my 170 class. Also my first exposure of using Unity to make this kinda game.</h2>
          <br/>
          <h2>Technologies used: Unity</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <a href='https://jodortiz.itch.io/brain-rhapsody' target="_blank" rel="noopener noreferrer"><h3>Visit project</h3></a>
          <a href={postmortem2} target="_blank" rel="noopener noreferrer" download>
          <h3>Post Mortem 2</h3>
          </a>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        {/* First column with pictures or carousel */}
        <Col lg={7}>
          {/* Add your picture or carousel component here */}
          {/* For example, if using an image: */}
          <img src={unlocked} alt="Project 1" className="img-fluid" />
        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Unlocked</b></h1>
          <h2>Escape room type of game. Game involves solving puzzles in order to escape a haunted mansion. You have 20 min to try to escape or something unfolds.</h2>
          <br/>
          <h2>Technologies used: Godot</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <a href='https://hmai.itch.io/unlocked' target="_blank" rel="noopener noreferrer"><h3>Visit project</h3></a>
          <a href={postmortem3} target="_blank" rel="noopener noreferrer" download>
          <h3>Post Mortem 3</h3>
          </a>
          {/* Add more projects as needed */}
        </Col>
      </Row>
      <hr className="my-5" />
      <h2 className='text-center'>These are some of my projects if interested in others they are all in my <a href = "https://github.com/adanglol" target='_blank' rel="noopener noreferrer">github</a>!</h2>
      <hr className="my-5" />




    </Container>
    </>
  );
}

function Contact() {
  return (
  <>
    <h1 className='mt-5 pt-5 text-center display-1'>CONTACT</h1>
    <br/>
    <br/>
    <p className='display-6 text-center'>Feel free to reach out to me here using this form!</p>
    <br/>
    <br/>
    <p className='display-6 text-center'>If form is not working feel free to email me at : adraging@gmail.com!</p>
    <br/>
    <br/>
    <Components.ContactForm/>
  </>
  );
}

