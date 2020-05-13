import React, { Component } from 'react';
import "./../css/layout.css"
import "./../css/default.css"
import "./../css/fonts.css"
import "./../css/magnific-popup.css"
import "./../css/media-queries.css"

// formatting the given information
class Footer extends Component {
   render() {
      if (this.props.data) {
         var year = this.props.data.year;
         var name = this.props.data.name;
     }
      return (
         <footer id="footer">
            <div className="row">
               <div className="twelve columns">
                  <ul className="copyright">
                     <li>&copy; Copyright {year}  {name}</li>
                  </ul>

               </div>
               <div className="scrollup">
                    <a className="smoothscroll" href="#home" title="Back to Top"><i className="icon-down-circle"></i></a>
                </div>
            </div>
         </footer>
      );
   }
}

export default Footer;
