import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Livingston, CA</h4>
            <p>
              Support data operations by reviewing, validating, and organizing datasets
              used for reporting and compliance. Work with internal systems and documentation
              to assist data accuracy, troubleshoot discrepancies, and learn established
              data workflows and reporting processes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Independent Software Projects & Skill Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Merced, CA</h4>
            <p>
              Developed a full-stack software project independently applying modern web technologies such as MongoDB, Express, React, and Node.js.
              Participated in networking events, online courses, and hands-on exercises to expand technical knowledge and professional connections.
              Sent out applications and attended interviews to explore opportunities in Information Technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Game Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Santa Cruz, CA</h4>
            <p>
              Designed, prototyped, and developed interactive games using Unity, Phaser, and Godot. 
              Focused on gameplay mechanics, physics simulations, state machines, and user interface systems. 
              Collaborated with peers on multi-person projects, learning team workflows, version control, 
              and iterative development practices.
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;