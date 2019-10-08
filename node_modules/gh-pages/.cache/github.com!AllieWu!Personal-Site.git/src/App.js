import React, { Component } from 'react';
import LoaderComponent from './components/LoaderComponent'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Social from './components/Social'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {
        main: { name: "Allison Wu", namecapped: "ALLISON WU", bio: "I'm a sophomore Computer Science major at the University of Florida, I like to build things, listen to music, and play with animals! I'm currently pursuing a Summer 2020 internship, and am hoping to gain knowledge in User Experience, Data Science, and overall Software Development.", phone: "(916) 952-3707", email: "allisonwu2000@gmail.com", resume: "https://drive.google.com/file/d/18D5CBLWpP9oDDFJ8k5-bPiPvS6HbVLSZ/view?usp=sharing" },
        resume: {
          education: [
            { imgname: "uflogo", school: "The University of Florida", degree: "Bachelor of Computer Science", graduated: "Expected Graduation: May 2022", description: "Working towards my major under the Herbert Weirtheim College of Engineering. Also pursuing a minor in statistics and considering a Masters in Computer Science.", coursework: ["Discrete Math", "Programming in Java", "Programming in C++", "Data Structures & Algorithms (Spring 2020)", "Introduction to Computer Organization (Spring 2020)"] }
          ],
          work: [
            { imgname: "intel-logo", company: "Intel", title: "Software Developer Intern", years: "May 2019 - Present", description: "Worked in a 5000+ product development organization, contributing $34 billion revenue. Developed new capabilities for business group's secueity portal ensuring compliance with security development lifecycle requirements. Created infrastructure for AI deployement to enhance quality of threat intelligence reporting and drove design and implementation of a multi class text classification model. Improved web navigation for users to view product security scan data in an intuitive manner using React graphing libraries. Presently path finding the moderniziation of the product life cycle management tools.", skills: ["Python", "JavaScript", "HTML/CSS", "Git", "SQL", "Full Stack Web Development", "Multi-class text classification", "Unsupervised & Supervised Machine Learning"] },
            { imgname: "vector-logo", company: "Vector Solutions", title: "Data Management Intern", years: "April 2018 - May 2018", description: "Collabored with senior data scientist in data compilation for company merging using Excel and SQL. Utilized critical thinking in troubleshooting errors in updating millions of customer records.", skills: ["Excel", "SQL", "Salesforce Admin"] }
          ],
          involvement: [
            { imgname: "swamphacks-logo", name: "SwampHacks VI", title: "Logistics Coordinator - Events", years: "September 2019 - Present", description: "Organizing annual 36-hour hackathon for a projected 700+ cross-nation students with 12+ sponsors including companies such as Microsoft, Google, and J.P. Morgan. Personally respnsuble for the success of the event and emphasis on operation of involvement activites." },
            { imgname: "magician-logo", name: "Magician", title: "Project Lead, Recruiter, UI programmer", years: "August 2018 - Present", description: "Project lead for a select group of students passionate about programming, art, and video games in developing Magician from scratch using Unity (C#). Personally in charge of programming the GUIs as well as inventory, crafting, and questing systems.", skills: ["C#", "Leadership", "Recruiting", "UI Design", "Project Management"] },
            { imgname: "swe-logo", name: "Society of Women Engineers", title: "Member", years: "August 2019 - Present", description: "SWE is the world's largest advocate for women in STEAM. UF's chapter helps individuals reach their full potential by providing opportunities for career development, relationship building, and by promoting the presence of women." },
            { imgname: "ufkb-logo", name: "UF Kickboxing Club", title: "Member", years: "September 2018 - Present", description: "Proud member of UFKB, meeting four times a week to hone individuals' skills in sparring with an emphasis in kickboxing!", skills: ["Kickboxing"] },
          ],
        },
        projects: [
          { image: "image", title: "Magician", url: "https://www.google.com", description: "2D RPG Dungeon Crawler for gamers to play to their full creativity!"},
          { image: "image", title: "Image Recognition", url: "https://www.google.com", description: "Try to use Neural Compute Stick, Raspberry Pi 3, and Machine Learning (2D Convolutional Neural Network) to identify objects in camera's path." },
          { image: "image", title: "", url: "https://www.google.com", description: ""},
        ],
        social: [
          { imgname: "linkedinlogo", name: "linkedin", url: "https://linkedin.com/in/allisonwu2000/" },
          { imgname: "maillogo", name: "email", url: "mailto:allisonwu2000@gmail.com" },
          { imgname: "githublogo", name: "github", url: "https://github.com/AllieWu" },
        ]
      }
    };
  }
  render() {
    const { resumeData } = this.state
    return (
      <div className="App">
        <LoaderComponent />
        <Header data={resumeData.main} />
        <Social data={resumeData.social} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Projects data={resumeData.projects} />
        <Footer />
      </div>
    );
  }
}

export default App;
