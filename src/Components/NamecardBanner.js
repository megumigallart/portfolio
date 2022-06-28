import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import avatarimg from "../images/a65832155622ac173337874f02b218fb.png"

export default class NamecardBanner extends Component {
  render() {
    return (
      // add here parallax
      <div className="">
        <div className="section-padding">
            <img className="avatar-img" src={avatarimg}  alt="avatarmeg" style={{
              height: "108px", 
              width: "108px",
              borderRadius: "100%",
              backgroundColor: "#fff"
              }}></img>
          <h1>Megumi Gallardo</h1> 
          <div className="typewriter">
            <p>I'm a UI UX designer</p>
            
          </div>
          <div style={{paddingTop: "20px"}}>
            <a className="btn-main-actv" >Contact me</a>
          </div>
 

        </div>
      </div>
    )
  }
}


/*src={avatarmeg}  alt="avatarmeg" */