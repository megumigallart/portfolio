import React, { Component, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { grid } from '@mui/system';
import workImage from "../images/retailersprofile-wireframe-balsam.png";
import workImage2 from "../images/user-persona-design-philip-dxc-mg-xd.png";
import workImage3 from "../images/works-image-3.png";
import workImage4 from "../images/works-image-4.png";
import workImage5 from "../images/works-image-5.png";
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#353353',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor: '#fff',
    overflow: 'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class RecentWorks extends Component {
  render() {
    return (
      <div style={{
          textAlign: "left",
          paddingTop: "110px"
      }}>
        <h1>Recent Works</h1>

         
        <Box sx={{ flexGrow: 1 }}>


        </Box>
      </div>
    )
  }
}


/*

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <img src={workImage} style={{
                            height: "200px", 
                            borderRadius: "10px",
                            overflow: "hidden"}}></img>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <img src={workImage2} style={{
                                height: "200px", 
                                width: "auto",
                                borderRadius: "10px"}}></img>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <img src={workImage3} style={{
                                height: "200px", 
                                width: "auto",
                                borderRadius: "10px"}}></img>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <img src={workImage4} style={{
                                height: "200px", 
                                width: "auto",
                                overflow: "auto",
                                borderRadius: "10px"}}></img>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <img src={workImage5} style={{
                                height: "200px", 
                                minWidth: "220px",
                                borderRadius: "10px"}}></img>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>

                    </Item>
                </Grid>
            </Grid>
*/