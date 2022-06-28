import logoimg from "./images/MG..png"
import './App.css';
import { styled } from '@mui/material/styles';
import React, { Component, useState, useCallback } from 'react';
import ImageViewer from "react-simple-image-viewer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NamecardBanner from './Components/NamecardBanner';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import RecentWorks from './Components/RecentWorks';
import GetinTouch from './Components/GetinTouch';
import Container from '@mui/material/Container';
import workImage3 from "./images/works-image-3.png";
import workImage4 from "./images/works-image-4.png";
import workImage5 from "./images/works-image-5.png";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#353353',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const drawerWidth = 290;

function App() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    workImage3,
    workImage4,
    workImage5
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="App">
      <div className="bg-image">
      <NamecardBanner></NamecardBanner>
      </div>  
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', 
              paddingBottom:'55px'
              }}>
              <CssBaseline sx={{ color: '#fff'}}/>
              <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
              >
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: '#353353',
                    padding: '50px 40px 40px 40px',
                  },
                }}
                variant="permanent"
                anchor="left"
              >
                <Toolbar />
                <div className="logo-main"><img src={logoimg} alt="logomg"></img></div>
                <Divider />
                <List>
                  {['Home', 'About Me', 'Works', 'Experience'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              {index % 2 === 0 ? <HomeOutlinedIcon sx={{color: "#ffd15c"}}/> : <AccountCircleOutlinedIcon sx={{color: "#ffd15c"}} />}
                            </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <span><p>© MG 2022</p></span>
              </Drawer>
                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: '#353353', p: 3 }}
                >
                  <Toolbar />
                  <AboutMe></AboutMe>
                  <Experience></Experience>
                  <div>
                    <h1>Recent Works</h1>
                    <div>      
                      {images.map((src, index) => (        
                        <img          
                        src={src}          
                        onClick={() => openImageViewer(index)}          
                        width="300"          
                        key={index}          
                        style={{ margin: "2px" }}          
                        alt=""        />      ))}       
                        {isViewerOpen && (        
                          <ImageViewer          
                          src={images}          
                          currentIndex={currentImage}          
                          onClose={closeImageViewer}          
                          disableScroll={false}          
                          backgroundStyle={{            
                            backgroundColor: "rgba(0,0,0,0.9)"          
                            }}          
                            closeOnClickOutside={true}        />      
                            )}    
                      </div>
                  </div>
                  <GetinTouch></GetinTouch>
                </Box>
            </Box>
      </Container>
                    
    </div>
  );
}

export default App;

/* <RecentWorks></RecentWorks>

/*  <Box sx={{ flexGrow: 1 }} className="layout-box-cont">
      <Grid container columns={16}>
          <Grid item xs={4}>
            <Item>
              <NavLeft></NavLeft>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <NamecardBanner></NamecardBanner>
              <AboutMe></AboutMe>
              <Experience></Experience>
              <RecentWorks></RecentWorks>
              <GetinTouch></GetinTouch>
            </Item>
          </Grid>
      </Grid>
    </Box>




    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
*/