import React, { Component } from 'react';
import intellogo from './../assets/intel.jpg';
import vectorlogo from './../assets/vectorsolutions.jpg';
import teslalogo from './../assets/tesla-logo.png';
import uflogo from './../assets/uflogo5.png';
import swamphackslogo from './../assets/swamphacks.jpg';
import magicianlogo from './../assets/magician.png';
import swelogo from './../assets/swe.jpg';
import ufkblogo from './../assets/ufkb.jpg';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"

class Resume extends Component {
    render() {

        if (this.props.data !== undefined) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school} className="resume item">
                    <h3><a href="http://www.ufl.edu/"><img className="education-logo" src={education.imgname === "uflogo" ? uflogo : undefined} alt={education.imgname + "Image"} /></a>{"     " + education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p>{education.description}</p>
                    <p>Relevant Coursework: {education.coursework.map(function (course) {
                        return course + ", "
                    })}</p>
                </div>
            })
            var work = this.props.data.work.map(function (work) {
                var useLogo = work.imgname === "intel-logo" ? intellogo : (work.imgname === "vector-logo" ? vectorlogo : (work.imgname === "tesla-logo" ? teslalogo : undefined));
                var useLink = work.imgname === "intel-logo" ? "https://www.intel.com/content/www/us/en/homepage.html" : (work.imgname === "vector-logo" ? "https://www.vectorsolutins.com/" : (work.imgname === "tesla-logo" ? "https://www.tesla.com/" : undefined));
                var skills = work.skills !== undefined ? work.skills.map(function (skill) {
                    return <span key={work.title + " skills"} className="skill">{skill}</span>
                }) : undefined
                var description = work.description !== undefined ? work.description.map(function(desc) {
                    return <p key={work.title + " description"}>{desc}</p>
                }) : undefined

                return <div key={work.company} className="resume item">
                    <h3><a href={useLink}>
                        <img className={work.imgname} src={useLogo} alt={work.imgname + "Image"} />
                    </a>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    {description}
                    {skills}
                </div>
            })
            var involvement = this.props.data.involvement.map(function (involvement) {
                var useLogo = involvement.imgname === "swamphacks-logo" ? swamphackslogo : (involvement.imgname === "magician-logo" ? magicianlogo : (involvement.imgname === "swe-logo" ? swelogo : (involvement.imgname === "ufkb-logo" ? ufkblogo : undefined)))
                var useLink = involvement.imgname === "swamphacks-logo" ? "https://2020.swamphacks.com/comingsoon" : (involvement.imgname === "swe-logo" ? "http://www.ufswe.com/" : (involvement.imgname === "ufkb-logo" ? "https://www.facebook.com/groups/533348426850757/" : undefined))
                var skills = involvement.skills !== undefined ? involvement.skills.map(function (skill) {
                    return <span key={involvement.title + " skills"} className="skill">{skill}</span>
                }) : undefined
                var description = involvement.description !== undefined ? involvement.description.map(function(desc) {
                    return <p key={involvement.title + " description"}>{desc}</p>
                }) : undefined

                return <div key={involvement.name} className="resumeObject">
                    <h3 key={involvement.name + " header"}><a href={useLink}>
                        <img className={involvement.imgname} src={useLogo} alt={involvement.name + "Image"} />
                    </a>{involvement.name}</h3>
                    <p className="info">{involvement.title}<span>&bull;</span> <em className="date">{involvement.years}</em></p>
                    {description}
                    {skills}
                </div>
            })
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row involvement">
                    <div className="three columns header-col">
                        <h1><span>Involvement</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {involvement}
                    </div>
                </div>

            </section>
        );
    }
}

export default Resume;
