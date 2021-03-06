import React, { Component } from 'react';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"

// formatting the given information
class Header extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.namecapped;
            var subtitle = this.props.data.subtitle;
        }
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#projects">Works</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1>{name}</h1>
                        <h3>{subtitle}</h3>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#footer"><i className="icon-down-circle"></i></a>
                </p>
                
            </header>
        );
    }
}

export default Header;
