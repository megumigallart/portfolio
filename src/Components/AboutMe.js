import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'left',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#353353',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default class AboutMe extends Component {
  render() {
    return (
      <div style={{padding: "0 0 100px 0"}}>
          <h1>About me</h1>

          <Grid container spacing={1}>
            <Grid item lg={3}>
              <Item>
                <div className="avatar-photo"></div>
              </Item>
            </Grid>
            <Grid item lg={9}>

            <div className="bubble-container">
              <Item>
                <Grid container>
                  <Grid item xs={6}>
                    <Item >
                      <div  >
                      <p>I am Megumi Gallardo, UI UX designer front end developer from Manila, Philippines. I have 5 years experience in UI UX and 3 years experience in frontend. </p>
                      <a className="btn-main-actv">Download CV</a>  
                      </div> 
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                        <span>UI UX</span> <span style={{textAlign: "right"}}>81%</span>
                        <div className="meter-progress-bar">
                          <div className="meter-calc-bar"></div>
                        </div> 
                        <span>UI UX</span> <span style={{textAlign: "right"}}>81%</span>
                        <div className="meter-progress-bar">
                          <div className="meter-calc-bar" id="skillcolor1"></div>
                        </div> 
                        <span>UI UX</span> <span style={{textAlign: "right"}}>81%</span>
                        <div className="meter-progress-bar" >
                          <div className="meter-calc-bar" id="skillcolor2"></div>
                        </div> 
                      </Item>
                  </Grid>
                </Grid>
              </Item>
            </div>
            </Grid>
          </Grid>

        </div>
    )
  }
}
