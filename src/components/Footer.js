import React, { Component } from 'react';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"

class Footer extends Component {
   render() {
      return (
         <footer>
            <div className="row">
               <div className="twelve columns">
                  <ul className="copyright">
                     <li>&copy; Copyright 2019  Allison Wu</li>
                  </ul>

               </div>
               <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
         </footer>
      );
   }
}

export default Footer;
