import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    boxShadow: 'none',
    borderRadius: '30px',
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#302F4E',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export default class Experience extends Component {
  render() {
    return (
      <Box>
          <h1 style={{padding: "0 0 0 0"}}>Experience
          </h1>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Item>

                <Grid container>
                  <Grid xs={1}>
                    <Item>
                      <div className="vl">
                        <SchoolOutlinedIcon sx={{color: "#F44E76"}}/>
                        <SchoolOutlinedIcon sx={{color: "#F44E76"}}/>
                        <SchoolOutlinedIcon sx={{color: "#F44E76"}}/>
                      </div>
                    </Item>
                    
                  </Grid>
                  <Grid xs={11}>
                    <Item>
                      <div className="experience-list-item">
                          <span className="text-dark-gray">2009-2014</span>
                          <div>
                            <h2>BSCS Com Sci</h2>
                          </div>
                          <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                      </div>
                      <div className="experience-list-item">
                          <span className="text-dark-gray">2009-2014</span>
                          <h2>Diploma HS</h2>
                          <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                      </div>
                      <div className="experience-list-item">
                          <span className="text-dark-gray">2009-2014</span>
                          <h2>Honorary Elementary</h2>
                          <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                      </div>
                    </Item>
                  </Grid>
                </Grid>

              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                  <div className="experience-list-item">
                      <span className="text-dark-gray">2009-2014</span>
                      <div>

                        <h2>BSCS Com Sci</h2>
                      </div>
                      <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                  </div>
                  <div className="experience-list-item">
                      <span className="text-dark-gray">2009-2014</span>
                      <h2>Diploma HS</h2>
                      <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                  </div>
                  <div className="experience-list-item">
                      <span className="text-dark-gray">2009-2014</span>
                      <h2>Honorary Elementary</h2>
                      <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                  </div>

              </Item>
            </Grid>
          </Grid>



      </Box>
    )
  }
}


/* 
          <Grid container spacing={4} columns={12}  >
            <Grid item xs={6} className="bubble-container">
                <Item className="experience-list-item">
                    <span>2009-2014</span>
                    <h2>BSCS Com Sci</h2>
                    <p>lorem ipsum</p>
                </Item>
                <Item className="experience-list-item">
                    <span>2009-2014</span>
                    <h2>BSCS Com Sci</h2>
                    <p>lorem ipsum</p>
                </Item>
                <Item className="experience-list-item">
                    <span>2009-2014</span>
                    <h2>BSCS Com Sci</h2>
                    <p>lorem ipsum</p>
                </Item>
            </Grid>
            <Grid item xs={6} className="bubble-container">
                <Item className="experience-list-item">
                    <span>2009-2014</span>
                    <h2>BSCS Com Sci</h2>
                    <p>lorem ipsum</p>
                </Item>
                <Item className="experience-list-item">
                    <span>2009-2014</span>
                    <h2>BSCS Com Sci</h2>
                    <p>lorem ipsum</p>
                </Item>
                <Item className="experience-list-item">
                    <span>2009-2014</span>
                    <h2>BSCS Com Sci</h2>
                    <p>lorem ipsum</p>
                </Item>
            </Grid>
          </Grid>
*/