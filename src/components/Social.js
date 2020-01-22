import React, { Component } from 'react';
import linkedinlogo from './../assets/linkedin.png'
import maillogo from './../assets/mail.png'
import githublogo from './../assets/github-purple.png'
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"

class Social extends Component {
    render() {
        if (this.props.data !== undefined) {
            var socialList = this.props.data.map(function (social) {
                return <div key={social.name}>
                    <li key={social.name}>
                        <a href={social.url} className="link">
                            <img className={social.imgname === "linkedinlogo" ? "linkedin-logo" : (social.imgname === "maillogo" ? "mail-logo" : (social.imgname === "githublogo" ? "github-logo" : undefined))}
                                src={social.imgname === "linkedinlogo" ? linkedinlogo : (social.imgname === "maillogo" ? maillogo : (social.imgname === "githublogo" ? githublogo : undefined))}
                                alt={social.imgname + "Image"} />
                        </a>
                    </li>
                </div>
            })
        }
        return (
            <section id="social">
                <ul id="socialList">
                    {socialList}
                </ul>
            </section>
        );
    }
}

export default Social;
