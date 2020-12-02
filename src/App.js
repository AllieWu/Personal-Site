import React, { Component } from "react";
import LoaderComponent from "./components/LoaderComponent";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Social from "./components/Social";

/* 
   App.js uses input information and creates the elements of the website with that information 
   This should be the only code you have to edit, with your information rather than mine, unless you want to edit the site!

   * main CSS file for formatting is in personal-site/src/layout.css
  
   To change any photos/icons: add them to personal-site/src/assets
   - Changing title background: goto layout.css, change the #home entry's url path to your newly added png/jpg in assets

   main is used for the Title and About section
   resume is used for the entries for the education, work, and involovement sections 
   projects is used for the main and mini projects sections
   social is used for the social bar on the left 
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {
        main: {
          name: "Allison Wu",
          namecapped: "ALLISON WU",
          subtitle: "",
          bio:
            "Welcome to my personal site! I'm a junior Computer Science major at the University of Florida and some of my hobbies include building programs, tinkering, discovering music, and doodling :)",
          phone: "(916) 952-3707",
          email: "allisonwu2000@gmail.com",
          resume:
            "https://drive.google.com/file/d/1lNj-JfWkp4dxlt36tOLBaG-3YyS-ddxv/view?usp=sharing",
        },
        resume: {
          education: [
            {
              imgname: "uflogo",
              school: "The University of Florida",
              degree: "Bachelor of Computer Science",
              graduated: "Expected Graduation May 2022",
              description:
                "Pursuing a Bachelor's of Science in Coputer Science under the Herbert Wertheim College of Engineering as well as a minor in Statistics.",
              coursework:
                "Programming in Java, Programming in C++, Discrete Math, Data Structures & Algorithms, Introduction to Computer Organization, Operating Systems, Software Engineering, Databases (Spring 2021), Programming Language Concepts (Spring 2021)",
            },
          ],
          work: [
            {
              imgname: "microsoft-logo",
              company: "Microsoft",
              location: "Redmond, Washington",
              title: "Software Engineering Intern",
              years: "June 2021 - August 2021",
              description: [
                "Incoming SWE Summer 2021 intern for the Cloud & Artifical Intelligence group at Microsoft in Redmond, Washington.",
              ],
            },
            {
              imgname: "tesla-logo",
              company: "Tesla",
              location: "Fremont, California",
              title: "Software Engineering Intern",
              years: "May 2020 - August 2020",
              description: [
                "Full stack web development in the outbound logistics team of the IT Applications Engineering group.",
                "Completed 40+ bug fixes/features on a highly complex homegrown set of applications managing all national/international vehicle transport.",
                "Worked closely with other developers, QA, and management to finish weekly releases and handle production bugs.",
                "Adept in exceptionally fast-paced software development using Scrum/Agile methodologies",
              ],
              skills: [
                "C#",
                "Javascript",
                "HTML/CSS",
                "GIT",
                "SQL",
                "Full Stack Web Development",
                "Angular",
                "React",
                "Svelte",
                ".Net",
                "Asp.Net",
                "Dapper ORM",
                "PetaPoco ORM",
                "Scrum/Agile Methodologies",
              ],
            },
            {
              imgname: "intel-logo",
              company: "Intel",
              location: "Hillsboro, Oregon",
              title: "Software Development Intern",
              years: "May 2019 - February 2020",
              description: [
                "Worked in a 5000+ product development organization contributing $34 billion revenue.",
                "Developed new capabilities for business group's security portal ensuring compliance with security development lifecycle requirements.",
                "Created infrastructure for AI deployement to enhance quality of threat intelligence reporting and drove design and implementation of a multi-class text classification model. Also responsible for organization of necessary training data.",
                "Improved web navigation for internal users to view product security scan data in an intuitive manner using React graphing libraries, namely Nivo-Rocks, React-Vis, and ReCharts.",
                "Developed a modern interactive product lifecycle management application in PowerApps.",
              ],
              skills: [
                "Python",
                "C#",
                "JavaScript",
                "HTML/CSS",
                "Git",
                "SQL",
                "Full Stack Web Development",
                "Multi-class text classification",
                "Unsupervised & Supervised Machine Learning",
                "Data Wrangling",
                "React",
                "PowerApps",
              ],
            },
            {
              imgname: "vector-logo",
              company: "Vector Solutions",
              location: "Tampa, Florida",
              title: "Data Management Intern",
              years: "April 2018 - May 2018",
              description: [
                "Collabored with senior data scientist in data compilation for company merging primarily using Excel and SQL.",
                "Utilized critical thinking in troubleshooting errors in updating millions of customer records.",
              ],
              skills: ["Excel", "SQL", "Salesforce Admin", "Data Wrangling"],
            },
          ],
          involvement: [
            {
              imgname: "magician-logo",
              name: "Magician",
              position1: {
                title: "Project Lead, Recruiter, Developer",
                years: "August 2018 - Present",
                description: [
                  "Project lead for a select group of students passionate about all aspects of video game development, including but not limited to programming, game design, and art. Magician was developed using Unity (C#).",
                  "Programmed the user interfaces, inventory/crafting/quest/job system, and resource loading.",
                ],
                skills: [
                  "C#",
                  "Leadership",
                  "Recruiting",
                  "UI Development",
                  "Project Management",
                ],
              },
            },
            {
              imgname: "swamphacks-logo",
              name: "SwampHacks",
              position1: {
                title: "Logistics Director",
                years: "March 2020 - Present",
                description: [
                  "Organized annual 36-hour hackathon for 818 students with 18+ sponsors including companies such as Microsoft, Google, and J.P. Morgan.",
                  "Oversaw all logistics operations of the hospitality, travel, food, activities, event, and sustainability coordination groups.",
                  "Responsible for scheduling and budgeting all for the above categories as well as overall succcess of the event.",
                ],
                skills: [
                  "Event Management",
                  "Interpersonal Skills",
                  "People Management",
                ],
              },
              position2: {
                imgname: "swamphacks-logo",
                name: "SwampHacks",
                title: "Activities Coordinator",
                years: "September 2019 - February 2019",
                description: [
                  "Planned and managed 20 activities throughout the 36-hour period.",
                ],
                skills: [
                  "Event Management",
                  "Interpersonal Skills",
                  "Creativity",
                ],
              },
            },
            {
              imgname: "swe-logo",
              name: "Society of Women Engineers",
              position2: {
                title: "Member",
                years: "August 2019 - Present",
                description: [
                  "SWE is the world's largest advocate for women in STEAM.",
                  "UF's chapter helps individuals reach their full potential by providing opportunities for career development, relationship building, and by promoting the presence of women.",
                ],
              },
              position1: {
                title: "Evening with Industry Chair",
                years: "April 2020 - Present",
                description: [
                  "Evening with Industry (EWI) is a career fair for organization and community members to network with companies.",
                  "EWI chair responsibilities include recruiting sponsors, handling budgets, ensuring the success of the event, and all related logistics.",
                ],
                skills: ["Event Management", "Professional Networking"],
              },
            },
            {
              imgname: "ufkb-logo",
              name: "UF Kickboxing Club",
              position1: {
                title: "Member",
                years: "September 2018 - Present",
                description: [
                  "Proud member of UFKB, meeting four times a week to hone individuals' skills in sparring with an emphasis in kickboxing among other martial arts.",
                ],
                skills: ["Kickboxing"],
              },
            },
          ],
        },
        projects: {
          mainprojects: [
            {
              image: "pjang-image",
              title: "Laundr Website",
              description:
                "is a MERN stack eCommerce site designed, developed, tested, and deployed for an actual client, Laundr, throughout the Fall 2020 semester for my Software Engineering class.\
                I performed as the Project Manager, Scrum Master, and primary Developer among 4 other student developers.",
              url: "https://pjang.herokuapp.com/",
            },
            {
              image: "magician-image",
              title: "Magician",
              description:
                "is a 2D RPG Dungeon Crawler video game for players who want to fully immerse themselves in the realm of magic, fighting the Chaos Wizard by making their way through all the elemental continents. The game is focused on a unique spell mechanic that highlights the player's individuality.",
            },
            {
              image: "website-image",
              title: "This Website",
              description:
                "Interactive resume website - click on the photo for the open source code! Instructions on usage and implementation are in the README file.",
              url: "https://github.com/AllieWu/Personal-Site",
            },
            {
              image: "ncs-image",
              title: "Image Recognition",
              description:
                "Project idea to use a Neural Compute Stick, Raspberry Pi 3, and Machine Learning (2D Convolutional Neural Network) to identify objects in camera's path.",
            },
          ],
          miniprojects: [
            {
              image: "model-image",
              title: "Library Model",
              description:
                "Designed and built a scaled architectural model of library using a laser cutter and Corel Draw",
            },
            {
              image: "no-image",
              title: "AR Create",
              description:
                "Developed interactive Alternate Reality iOS Application in XCode for users to place hundreds of combinations of shapes through their camera, with a built-in custom QR reader.",
            },
            {
              image: "google-image",
              title: "Fixed Tardy System",
              description:
                "Fixed school’s Raspberry Pi 3 based tardy system in Google Cloud Console.",
            },
            {
              image: "pc-image",
              title: "High-End PC Assembly",
              url: "https://pcpartpicker.com/user/alliewolf/saved/",
              description: "Click on the photo for a list of my PC parts!",
            },
          ],
        },
        social: [
          {
            imgname: "linkedinlogo",
            name: "linkedin",
            url: "https://linkedin.com/in/allisonwu2000/",
          },
          {
            imgname: "maillogo",
            name: "email",
            url: "mailto:allisonwu2000@gmail.com",
          },
          {
            imgname: "githublogo",
            name: "github",
            url: "https://github.com/AllieWu",
          },
        ],
        footer: {
          year: "2019",
          name: "Allison Wu",
        },
      },
    };
  }

  // render the website with the information in each component
  render() {
    const { resumeData } = this.state;
    return (
      <div className="App">
        <LoaderComponent />
        <Header data={resumeData.main} />
        <Social data={resumeData.social} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Projects data={resumeData.projects} />
        <Footer data={resumeData.footer} />
      </div>
    );
  }
}

export default App;
