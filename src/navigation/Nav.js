import React from 'react';
import './Nav.css';        
import { Link, animateScroll as scroll } from "react-scroll";
class Nav extends React.Component {
  render() {

          return (
            <nav className="nav" id="navbar">
              <div className="nav-content">
              
                <ul className="nav-items">
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="Github"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                   Github
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                    Skills
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                    Contacts
                    </Link>
                  </li>
               
                </ul>
              </div>
            </nav>
          );
        }
      }

 export default Nav;
   
