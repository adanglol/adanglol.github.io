

import memory from '../assets/my_image/memory.png'
// import shermanGroup from '../assets/my_image/veilwoodj.png'
import shermanGroup from '../assets/my_image/sherman-group.jpg'
import brainRap from '../assets/my_image/brain-rap.png'
import greenSeren from '../assets/my_image/greenseren.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/adanglol/memory-lane" target="_blank" rel="noreferrer"><img src={memory} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adanglol/memory-lane" target="_blank" rel="noreferrer"><h2>Memory Lane</h2></a>
                <p>  Built a full-stack MERN (MongoDB, Express, React, Node.js) audio diary application that allows users to record, organize, and maintain personal audio diaries. 
                    Implemented secure user authentication, audio playback, and persistent cloud storage to ensure data reliability. 
                    Focused on writing unit and integration tests for both frontend and backend components to ensure functionality and maintainability. 
                    Applied best practices in React state management, RESTful API design, and responsive UI for cross-device usability. 
                    Deployed the application to a cloud environment, enabling users to access their diaries from anywhere while ensuring data privacy and security.
                </p>
            </div>
            <div className="project">
                <a href="https://golfbag.itch.io/shermans-quest-og" target="_blank" rel="noreferrer"><img src={shermanGroup} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://golfbag.itch.io/shermans-quest-og" target="_blank" rel="noreferrer"><h2>Sherman's Quest</h2></a>
                <p>Collaborated with a team to create a 3D game in which you play as a young man named Sherman doing errands for his sister. It is available on Itch.io. I was one of the developers for the game implementing the quest logic, dialogue system, as well as the cinematic cutscenes.</p>
            </div>
            <div className="project">
                <a href="https://jodortiz.itch.io/brain-rhapsody" target="_blank" rel="noreferrer"><img src={brainRap} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jodortiz.itch.io/brain-rhapsody" target="_blank" rel="noreferrer"><h2>Brain Rhapsody</h2></a>
                <p>Created a bullet-hell style 2D game in Unity. Collaborated with a team to develop the game mechanics and visual effects. My job was focusing on developing the UI as well as shooting mechanics and the score system.</p>
            </div>
            <div className="project">
                <a href="https://adanglol.github.io/green-serenity/" target="_blank" rel="noreferrer"><img src={greenSeren} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://adanglol.github.io/green-serenity/" target="_blank" rel="noreferrer"><h2>Green Serenity</h2></a>
                <p>Developed a web-based game that combines audio and interactive mechanics to create a calming experience. 
                    Built entirely Phaser.JS and WebSpeech API.I implemented each mini game as well as the webpage design.
                </p>    
            </div>
        </div>
    </div>
    );
}

export default Project;