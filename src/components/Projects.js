import React, { Component } from 'react';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"
import lakeImage from "./../assets/lakeImage.jpg"

class Portfolio extends Component {
    render() {
        if (this.props.data !== undefined) {
            console.log(this.props.data);
            var projectsFormatted = this.props.data.map(function (project) {
                var projectImage = lakeImage;
                return (
                    <div className="project-item">
                        <a className="image" href={project.url}>
                            <img src={projectImage} alt="Project Image" />
                        </a>
                        <p className="description">
                            <b>{project.title + " "}</b>
                            {project.description}
                        </p>

                    </div>
                );
            })
        }
        return (
            <section id="projects">
                <div className="row portfolio">
                    <div className="twelve columns collapsed">
                        <h1><span>Some of my Projects</span></h1>
                        <div id="project-wrapper">
                            {projectsFormatted}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
