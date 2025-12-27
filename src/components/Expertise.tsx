import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLaptopCode, faGamepad } from '@fortawesome/free-solid-svg-icons';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsDataAnalysis = [
    "Aeries",
    "CALPADS",
    "Excel",
    "SQL",
    "Python",
    "Pandas",
    "Data Cleaning",
    "Data Validation",
    "Reporting",
];

const labelsSoftwareDevelopment = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "HTML",
    "CSS",
    "APIs",
    "Git",
    "GitHub Actions",
    "Full-Stack Development",
    "Web Applications",
    "Prototyping"
];

const labelsGameDevelopment = [
    "Unity",
    "Godot",
    "Phaser.JS",
    "Gameplay Systems",
    "State Machines",
    "Physics",
    "UI Systems",
    "Prototyping",
    "Player Experience",
    "Scripting",
    "Iterative Design"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Analysis</h3>
                    <p>Work with structured datasets to review, clean, and validate
                        data for reporting and operational support. Focus on data accuracy,
                        documentation, and learning established workflows in a production environment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDataAnalysis.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Software Development</h3>
                    <p>Build and maintain full-stack web applications, dashboards, and internal tools.
                        Focus on frontend and backend development, API integration, and iterative project
                        delivery using modern web technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSoftwareDevelopment.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Game Development</h3>
                    <p>Explore interactive systems and prototype game mechanics for personal
                        projects. Focus on gameplay, user experience, and iterative development,
                        gaining experience with engines, scripting, and design patterns.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsGameDevelopment.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;