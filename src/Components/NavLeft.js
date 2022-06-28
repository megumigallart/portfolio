import React, { Component } from 'react';
import logoimg from "../images/MG..png"

export default class NavLeft extends Component {
  render() {
    return (
      <div>
        <div className="logo-main"><img src={logoimg} alt="logomg"></img></div>
        <div className="nav-links">
          <div><a style={{textAlign: "left"}}  href='#home'>Home</a></div>
          <div><a href='#home'>About me</a></div>
          <div><a href='#home'>Works</a></div>
          <div><a href='#home'>Experience</a></div>
          <span><p>© MG 2022</p></span>
        </div>
      </div>
    )
  }
}