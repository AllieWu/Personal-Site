import React, { Component } from 'react';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"
import lakeImage from "./../assets/lakeImage.jpg"
import compooperImage from "./../assets/compooper.JPG"
import ncsImage from "./../assets/ncs.JPG"
import magicianImage from "./../assets/magicianscene.png"
import googleImage from "./../assets/googlecloudconsole.png"
import modelImage from "./../assets/model.png"

// formatting the given information
class Portfolio extends Component {
    render() {
        if (this.props.data !== undefined) {
            console.log(this.props.data);
            var projectsFormatted = this.props.data.mainprojects.map(function (project) {
                var projectImage = project.image === "ncs-image" ? ncsImage : (project.image === "magician-image" ? magicianImage : lakeImage);
                return (
                    <div key={project.title} className="wrapper">
                        <div key={project.title + " item"} className="item">
                            <a href={project.url}>
                                <img src={projectImage} alt="Project" className="image" />
                            </a>
                            <p className="description">
                                <b>{project.title + " "}</b>
                                {project.description}
                            </p>

                        </div>
                    </div>
                );
            })

            var miniFormatted = this.props.data.miniprojects.map(function (project) {
                if (project.image !== "no-image") {
                    var projectImage = project.image === "pc-image" ? compooperImage : (project.image === "google-image" ? googleImage : (project.image === "model-image" ? modelImage : undefined));
                    var imageObj = <a href={project.url}>
                        <img src={projectImage} alt="Project" className="miniimage image" />
                    </a>
                }

                return (
                    <div key={project.title + " mini"} className="mini wrapper">
                        <div key={project.title + " mini item"} className="mini item">
                            {imageObj}
                            <p className="minidescription description">
                                <b>{project.title + " "}</b>
                                {project.description}
                            </p>
                        </div>
                    </div>
                );
            })
        }

        return (
            <section id="projects">
                <div className="row portfolio">
                    <div className="three columns header-col" style={{ marginBottom: "10px" }}>
                        <h1><span>Projects</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {projectsFormatted}
                    </div>
                </div>

                <div className="row portfolio">
                    <div className="three columns header-col" style={{ marginBottom: "10px" }}>
                        <h1><span>Mini Projects</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {miniFormatted}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
