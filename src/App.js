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
        main: { name: "Allison Wu", namecapped: "ALLISON WU", bio: "Welcome to my personal site! I'm a sophomore Computer Science major at the University of Florida and some of my hobbies include building programs, tinkering, finding new music, and playing with animals.", phone: "(916) 952-3707", email: "allisonwu2000@gmail.com", resume: "https://drive.google.com/file/d/1s5G2Nz1Cl7o-Uo2IFBP0t7eI8osJkXjK/view?usp=sharing" },
        resume: {
          education: [
            { imgname: "uflogo", school: "The University of Florida", degree: "Bachelor of Computer Science", graduated: "Expected Graduation: May 2022", description: "Pursuing my major under the Herbert Wertheim College of Engineering as well as a minor in statistics.", coursework: ["Discrete Math", "Programming in Java", "Programming in C++", "Data Structures & Algorithms", "Introduction to Computer Organization"] }
          ],
          work: [
            { imgname: "tesla-logo", company: "Tesla", title: "Web Development Intern", years: "May 2020 - August 2020", description: ["Incoming Intern for Summer 2020! I will be working on building home grown applications for cross-department uses."]},
            { imgname: "intel-logo", company: "Intel", title: "Software Developer Intern", years: "May 2019 - Present", description: ["Worked in a 5000+ product development organization, contributing $34 billion revenue.", "Developed new capabilities for business group's security portal ensuring compliance with security development lifecycle requirements. Created infrastructure for AI deployement to enhance quality of threat intelligence reporting and drove design and implementation of a multi class text classification model as well as organization of training data.", "Improved web navigation for internal users to view product security scan data in an intuitive manner using React graphing libraries, namely Nivo-Rocks, React-Vis, and ReCharts.", "Presently path finding the moderniziation of the business group's product life cycle management tools for platform dependent and independent software, firmware, and hardware."], skills: ["Python", "C#", "JavaScript", "HTML/CSS", "Git", "SQL", "Full Stack Web Development", "Multi-class text classification", "Unsupervised & Supervised Machine Learning", "Data Wrangling", "React", "ASP.NET Core"] },
            { imgname: "vector-logo", company: "Vector Solutions", title: "Data Management Intern", years: "April 2018 - May 2018", description: ["Collabored with senior data scientist in data compilation for company merging primarily using Excel and SQL.", "Utilized critical thinking in troubleshooting errors in updating millions of customer records."], skills: ["Excel", "SQL", "Salesforce Admin", "Data Wrangling"] }
          ],
          involvement: [
            { imgname: "swamphacks-logo", name: "SwampHacks VI", title: "Logistics Coordinator - Events", years: "September 2019 - Present", description: ["Organized annual 36-hour hackathon for a projected 700+ cross-nation students with 12+ sponsors including companies such as Microsoft, Google, and J.P. Morgan.", "Personally responsible for the success of the event with emphasis on operation of attendees' involvement activites."] },
            { imgname: "magician-logo", name: "Magician", title: "Project Lead, Recruiter, UI programmer", years: "August 2018 - Present", description: ["Project lead for a select group of students passionate about all aspects of video game development, including but not limited to programming, game design, and art. Magician was developed using Unity (C#).", "Programmed the user interfaces as well as inventory, crafting, and questing systems."], skills: ["C#", "Leadership", "Recruiting", "UI Design", "Project Management"] },
            { imgname: "swe-logo", name: "Society of Women Engineers", title: "Member", years: "August 2019 - Present", description: ["SWE is the world's largest advocate for women in STEAM.", "UF's chapter helps individuals reach their full potential by providing opportunities for career development, relationship building, and by promoting the presence of women."] },
            { imgname: "ufkb-logo", name: "UF Kickboxing Club", title: "Member", years: "September 2018 - Present", description: ["Proud member of UFKB, meeting four times a week to hone individuals' skills in sparring with an emphasis in kickboxing among other martial arts."], skills: ["Kickboxing"] },
          ],
        },
        projects: {
          mainprojects: [
            { image: "magician-image", title: "Magician", description: "is a 2D RPG Dungeon Crawler video game for players who want to fully immerse themselves in the realm of magic, fighting the Chaos Wizard by making their way through all the elemental continents. The game is focused on a unique spell mechanic that highlights the player's individuality." },
            { image: "ncs-image", title: "Image Recognition", description: "Project idea to use a Neural Compute Stick, Raspberry Pi 3, and Machine Learning (2D Convolutional Neural Network) to identify objects in camera's path." },
          ],
          miniprojects: [
            { image: "model-image", title: "Library Model", description: "Designed and built a scaled architectural model of library using a laser cutter and Corel Draw" },
            { image: "no-image", title: "AR Create", description: "Developed interactive Alternate Reality iOS Application in XCode for users to place hundreds of combinations of shapes through their camera, with a built-in custom QR reader." },
            { image: "google-image", title: "Fixed Tardy System", description: "Fixed school’s Raspberry Pi 3 based tardy system in Google Cloud Console." },
            { image: "pc-image", title: "High-End PC Assembly", url: "https://pcpartpicker.com/user/alliewolf/saved/", description: "Click on the photo for a list of my PC parts!"}
          ],
        },
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
