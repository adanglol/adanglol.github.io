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

// import Luxe Lagoon Gaming Lounge image
import lagoon from './images/project/LAGOON.png';

// import art 101 website image
import art101 from './images/project/ART101.png';

// import El/La Landing Page image
import ella from './images/project/El_La.png';

// import Gauntlet image
import gauntlet from './images/project/Gauntlet.png';
// Resume
import pdf from './images/resume/RESUME.pdf';

// CRV
import CRV from './images/resume/CRV.pdf';

// Cover Letter
// import coverLetter from './images/resume/CoverLetter.pdf';

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
        <Route exact path='/logs' element={<Logs/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}



function Home() {
  useEffect(() => {
    document.title = 'Aaron Dangc - Creative Portfolio'
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="text-center animate__animated animate__backInDown animate_slower vh-100 px-3">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 col-sm-12 mb-4 mb-md-0 animate__animated animate__backInLeft animate__delay-1s">
            <p className="fs-1 mt-5 mt-lg-0">Hello, I'm <i>Aaron Dangc</i></p>
            <br />
            <p className="fs-1">I am a  Web and Game Developer!</p>
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
    document.title = 'Aaron Dangc - About'
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
        <div className="col-lg-6 text">
          <br />
          <h3 className='fs-2'>
            Hello! I am Aaron Dangc, a passionate Game and Web Developer based in Central Valley.
            Here, you can learn more about me and my journey. I am dedicated to creating medias of play in form of games and websites. Feel free to
            explore my projects and get in touch if you have any inquiries. 
          </h3>
          <br />
          <h3 className='fs-2'>In the realm of game and web development, I find solace and passion in the intricate dance between lines of code and the birth of virtual worlds.
          As someone deeply immersed in the world of programming, my journey as a developer is not just a profession but a relentless pursuit of turning ideas into tangible, interactive realities.</h3>
        <br />
          <div style={{ display: 'flex' }}>
            <Link to="/resume" style={{ marginRight: '10px' }}>
              <h1>Resume</h1>
            </Link>

            <Link to="/projects" style={{ marginRight: '10px' }}>
              <h1>Projects</h1>
            </Link>

            <Link to="/contact" style={{ marginRight: '10px' }}>
              <h1>Contact</h1>
            </Link>

            <a href='https://github.com/adanglol' target='_blank' rel='noopener noreferrer' style={{ marginRight: '10px' }}>
              <h1>Github</h1>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function Resume() {
  useEffect(() => {
    document.title = 'Aaron Dangc - Resume'
    window.scrollTo(0, 0)
  }, [])

  return(
    <>
      <h1 className='mt-5 pt-5 text-center display-1'>Resume</h1>
      <p className="text-center">
        <a href={pdf} target="_blank" rel="noopener noreferrer" download>
          <h1>Download Resume</h1>
        </a>
      </p>
      <h1 className='mt-5 pt-5 text-center display-1'>CV</h1>
      <p className="text-center">
        <a href={CRV} target="_blank" rel="noopener noreferrer" download>
          <h1>Download CV</h1>
        </a>
      </p>
      {/* <h1 className='mt-5 pt-5 text-center display-1'>Cover Letter</h1> */}
      {/* <p className="text-center">
        <a href={coverLetter} target="_blank" rel="noopener noreferrer" download>
          <h1>Download Cover Letter</h1>
        </a>
      </p> */}
      <h1 className='mt-5 pt-5 text-center display-1'>Feel free to check it out!</h1>
    </>
  );
}

function Projects() {
  useEffect(() => {
    document.title = 'Aaron Dangc - Projects'
    window.scrollTo(0, 0)
  }, [])
  return(
    <>
    <Container className="mt-5 pt-5">
      <h1 className='text-center display-1'>Projects</h1>
      <br/>
      <Row className="mt-4">
        <Col lg={7} className = "mb-4">
          <a href='https://remogarc.github.io/CMPM120Final/' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={cosmicCleanup} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>
        </Col>
  
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Cosmic Cleanup</b></h1>
          <br/>
          <h2>Technologies used: Phaser.JS</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <h3>Game that involves being an astronaut in distant future. Cleaning the cosmos one step at a time. As you traverse the different planets to pick up trash a platformer game. The game was created during my CMPM 120 class forming a group of 4.</h3>
          <br/>
        </Col>
      </Row>
      <hr className="my-5" />


      <Row className="mt-4">
        <Col lg={7} className='mb-4'>
          <a href='https://adanglol.github.io/green-serenity/' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={greenSerenity} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>
        </Col>

        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Green Serenity</b></h1>
          <br/>
          <h2>Technologies used: Phaser.JS</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <h3>Game that involves using your voice as an input for play as well as listening to sound. It is an anthology of mini-games. The inspiration behind this project was for my second jam in my Artg 170 class where we drew inspirations from the Sonic Meditations to create this.</h3>
          <br/>
          <a href={postmortem} target="_blank" rel="noopener noreferrer" download>
          <h3>Post Mortem</h3>
          </a>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        {/* First column with pictures or carousel */}
        <Col lg={7} className='mb-4'>
          <a href='https://jodortiz.itch.io/brain-rhapsody' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={brainRhapsody} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>

          </a>

        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Brain Rhapsody</b></h1>
          <br/>
          <h2>Technologies used: Unity</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <h3>Bullet Hell style game. Story takes place within a lecture hall as you take some candies and start tripping out. Suddenly monsters come to get you. You have 4 forms and have to swap between each one to fight the horde. This game was created during the second Jam for my 170 class. Also my first exposure of using Unity to make this kinda game.</h3>
          <br/>
          <a href={postmortem2} target="_blank" rel="noopener noreferrer" download>
          <h3>Post Mortem 2</h3>
          </a>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        <Col lg={7} className='mb-4'>

          <a href='https://hmai.itch.io/unlocked' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={unlocked} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>

        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Unlocked</b></h1>
          <br/>
          <h2>Technologies used: Godot</h2>
          <br/>
          <h2>Role: Lead Programmer</h2>
          <br/>
          <h3>Escape room type of game. Game involves solving puzzles in order to escape a haunted mansion. You have 20 min to try to escape or something unfolds.</h3>
          <br/>
          <a href={postmortem3} target="_blank" rel="noopener noreferrer" download>
          <h3>Post Mortem 3</h3>
          </a>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        <Col lg={7} className='mb-4'>

          <a href='https://adanglol.github.io/luxelagoon-gaming-lounge/' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={lagoon} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>

        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Luxe Lagoon Gaming Lounge</b></h1>
          <br/>
          <h2>Technologies used: Phaser.JS</h2>
          <br/>
          <h2>Role: Lead Developer</h2>
          <br/>
          <h3>In the process of development. A series of casino like mini-games to enjoy. The games range from Blackjack, Texas Hold Em, Roulette, and Slots. The idea is learning to develop card games and a personal project / endeavor!</h3>
          <br/>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        <Col lg={7} className='mb-4'>

          <a href='https://adanglol.github.io/art101/' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={art101} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>

        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Art 101 Website</b></h1>
          <br/>
          <h2>Technologies used: HTML,CSS,JS</h2>
          <br/>
          <h2>Role: Lead Developer</h2>
          <br/>
          <h3>Class Website for class took as undergraduate. Art 101 Computer Programming for the Arts in this class I learned the fundamentals of web development. That includes HTML,CSS, and JS. To also note also learned to use API's as well as the use of jQuery. In this site you will see various labs.</h3>
          <br/>
          {/* Add more projects as needed */}
        </Col>
      </Row>

      <hr className="my-5" />
      <Row className="mt-4">
        <Col lg={7} className='mb-4'>

          <a href='https://el-la-landing-page.webflow.io/' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={ella} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>

        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>El/La Landing Page</b></h1>
          <br/>
          <h2>Technologies used: Webflow</h2>
          <br/>
          <h2>Role: Lead Developer</h2>
          <br/>
          <h3>Class Website for class took as undergraduate. Creating Websites for social change. In this class we have collaborated with El/La a TransLatinas activist organization which their mission statement advocating rights for TransLatinas. We had to make a landing page for El/La.</h3>
          <br/>
          {/* Add more projects as needed */}
        </Col>
      </Row>


      <hr className="my-5" />
      <Row className="mt-4">
        <Col lg={7} className='mb-4'>

          <a href='https://adanglol.itch.io/gauntlet' target="_blank" rel="noopener noreferrer">
            <div className = "image-container">
              <img src={gauntlet} alt="Project 1" className="img-fluid" />
              <div className = "overlay">
                  <h1 className='text-center display-1 text'>Visit Project</h1>
              </div>
            </div>
          </a>

        </Col>
        
    
        {/* Second column with texts and links */}
        <Col lg={5}>
          <h1><b>Gauntlet</b></h1>
          <br/>
          <h2>Technologies used: Construct</h2>
          <br/>
          <h2>Role: Assistant Developer</h2>
          <br/>
          <h3>A platformer type game that was made during my freshman year in university for CMPM 80k. You go through series of levels dodging obstacles. The obstacles varies so you will have to be dilligent when traversing and dodging obstacles</h3>
          <br/>
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


function Logs(){
  useEffect(() => {
    document.title = 'Aaron Dangc - Logs'
    window.scrollTo(0, 0)
  }, [])
  return(
    <>
      <h1 className='mt-5 pt-5 text-center display-1 mb-5'>Logs</h1>
      <p className='display-6 text-center'>Where I will put my documentation on some of my work feel free check out!</p>
    </>
  );
}

function Contact() {
  useEffect(() => {
    document.title = 'Aaron Dangc - Contact'
    window.scrollTo(0, 0)
  }, [])
  return (
  <>
    <h1 className='mt-5 pt-5 text-center display-1'>CONTACT</h1>
    <br/>
    <br/>
    {/* <p className='display-6 text-center'>Feel free to reach out to me here using this form!</p> */}
    {/* <br/>
    <br/> */}
    <p className='display-6 text-center'>Feel free to email me at : <a href="mailto:adraging@gmail.com">adraging@gmail.com</a></p>
    <br/>
    <br/>
    <p className='display-6 text-center'>If you prefer to text or call : 209-355-9633</p>
    <br/>
    <br/>
    <p className='display-6 text-center'>You can also find me on <a href='https://www.linkedin.com/in/aaron-dangc-04897123b/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
    <br/>
    <br/>
    <p className='display-6 text-center'>Looking foward to hearing from you!</p>

    {/* <Components.ContactForm/> */}
  </>
  );
}

