import React, { Component } from 'react';
import profilepic from './../assets/profilepic.png';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"

// formatting the given information
class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var bio = this.props.data.bio;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resume = this.props.data.resume;
        }
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns header-col">
                        <img className="profile-pic" src={profilepic} alt="Allison Wu Profile" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>Hi, I'm Allison</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br />
                                    <span>{phone}</span><br />
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download" style={{ paddingBottom: "0px", height: "75px" }}>
                                <p>
                                    <a href={resume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
