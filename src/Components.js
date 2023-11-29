// Where we will define all of our components for our application
import {React,useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'; // Import the Button component
import './App.css'; // Import custom CSS file
// routing for our navbar 
import {Link,NavLink} from 'react-router-dom';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// to make HTTP requests using axios
import axios from 'axios';


                                                                
export function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='px-5' id = 'nav' fixed='top'>
      <Navbar.Brand href="#home" className='fs-1' as={Link} to='/'>Aaron Dangc</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav"/>
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className='fs-2 mr-3' as= {NavLink} to='/about'>About</Nav.Link>
          <Nav.Link className='fs-2'  as= {NavLink} to='/resume'>Resume</Nav.Link>
          <Nav.Link className='fs-2'  as= {NavLink} to='/projects'>Projects</Nav.Link>
          <Nav.Link className='fs-2'  as= {NavLink} to='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


// Using alert for now for feedback 
// future implementation will be to use a component and add a success message and state variable to show success message

export function ContactForm() {
    // State variables to hold form input values
    
    const [subject, setSubject] = useState(''); // email subject 
    const [message, setMessage] = useState(''); // email message

  
    // Function to handle form submission
    const handleSubmit = (e) => {
      // Prevent default form submission behavior
      e.preventDefault();
      // Prepare email data object
      const emailData = {
        to: 'adraging@gmail.com',  // recipient which is myself
        subject,
        text: message,
      };
  
      // Send email request to backend server
      // http://localhost:4000/send-email
      // https://adanglol-backend-b3a02bbea64a.herokuapp.com/send-email
      axios
        .post('https://adanglol-backend-b3a02bbea64a.herokuapp.com/send-email', emailData)
        .then((response) => {
          console.log('Email sent successfully:', response.data);
          // Handle success, show a success message, reset form fields, etc.
          alert('Your Message has been sent!\n\nThanks for reaching out I will reach out as soon as possible!\n\nSincerely\n\n--Aaron Dangc'); // show a success message
          // reset form fields
          setSubject(''); 
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error.response.data.message);
          // Handle error, show an error message, etc.
        });
    };
  
    return (
      <>
      <div className='d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="subject" className='fs-2'>Subject (Topic): </label>
            <br />
            <br />
            <input
            type="text"
            className="form-control form-control-lg fs-3" // Apply form-control-lg class to make the textarea larger
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor="message" className='fs-2'>Message (Your Contact Info and Details): </label>
            <br />
            <br />
            <textarea
            id="message"
            className="form-control form-control-lg resize-none fs-3" // Apply form-control-lg class to make the textarea larger
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            />
          </div>
          <br />
          <div className='text-center'>
            <button type="submit" className='btn btn-primary btn-lg '>Send</button>
          </div>
        </form>
      </div>

      
      </>
    );
}


