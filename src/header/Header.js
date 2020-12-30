import React from 'react';
import './Header.css';
import Nav from '../navigation/Nav';
import { Link, animateScroll as scroll } from "react-scroll";


class Header extends React.Component {
  render() {
    return (

      <header className="App-header">

        <p1>Onishchenko Vladyslav</p1>

        <Nav />


        <div className="welcome">

          <h3>Hey, i'm</h3>

          <h1>Onishchenko <br></br>
              Vladyslav</h1>

        </div>

      </header>

    );
  }
}
export default Header;