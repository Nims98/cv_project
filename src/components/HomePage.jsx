import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Grow } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import Image from "./img";
import Css from "./../icons/css";
import Git from "./../icons/git";
import Github from "./../icons/github";
import Html from "./../icons/html";
import Js from "./../icons/js";
import MongoDb from "./../icons/mongodb";
import Node from "./../icons/node";
import ReactIcon from "./../icons/react";
import Terminal from "./../icons/terminal";
import Vstudio from "./../icons/visual_studio";
import VScode from "./../icons/vs_code";
import FaceBook from "./../icons/facebook";
import Instagram from "./../icons/instagram";
import Whatsapp from "./../icons/whatsapp";
import Twitter from "./../icons/twitter";
import LinkedIn from "./../icons/linkedin";
import Gmail from "./../icons/gmail";
import Photo from "./../icons/avatar.png";
const HomePage = () => {
  return (
    <Grow in>
      <div>
        <Grid container direction="row" marginTop={4} justifyContent="center">
          <Grid container xl={1} lg={1} md={3} sm={8} xs={10} justifyContent="center" marginLeft={1}>
            <Avatar style={{ width: "140px", height: "140px" }} src={Photo} />
          </Grid>
          <Grid container xl={4} lg={5} md={6} sm={10} xs={10} marginTop={5} justifyContent="center">
            <Typography variant="h3" color="white" textAlign="center">
              Nirmala Madhusankha
            </Typography>
          </Grid>
          <Grid container xl={6} lg={5} md={1} sm={0} xs={0}></Grid>
        </Grid>
        <Grid container spacing={1} paddingTop={5} justifyContent="center">
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <Container>
              <Image />
            </Container>
          </Grid>
          <Grid item lg={7} md={10} sm={12} xs={12}>
            <Container>
              <div style={{ marginTop: "80px", border: "5px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}>
                <Container sx={{ padding: 3 }}>
                  <Typography variant="h3" color="white" marginBottom={3}>
                    Hello there !
                  </Typography>
                  <Typography variant="h6" color="white">
                    I'm an Undergraduate Engineering student at University of Ruhuna Srilanka.Currently studies under
                    Electrical and Information Engineering department. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Adipisci impedit eligendi culpa quam a amet voluptatem assumenda similique
                    suscipit, ipsum fugiat doloribus distinctio, nostrum dolor cupiditate ea voluptates commodi
                    delectus.
                  </Typography>
                </Container>
              </div>
            </Container>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginBottom={6} justifyContent="center">
          <Grid item lg={5} md={10} sm={12} xs={12}>
            <Container>
              <div style={{ marginTop: "50px", border: "5px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}>
                <Container sx={{ padding: 3 }}>
                  <Typography variant="h5" color="white" marginBottom="20px">
                    ⚙️ Currently used Technologies and Tools
                  </Typography>
                  <div style={{ diplay: "flex", flexDirection: "column" }}>
                    <Router>
                      <Link to={{ pathname: "https://code.visualstudio.com/" }} target="_blank">
                        <VScode />
                      </Link>
                      <Vstudio />
                      <Html />
                      <Css />
                      <Js />
                      <ReactIcon />
                      <Node />
                      <MongoDb />
                      <Git />
                      <Github />
                      <Terminal />
                    </Router>
                  </div>
                </Container>
              </div>
            </Container>
          </Grid>
          <Grid item lg={7} md={10} sm={12} xs={12}>
            <Container>
              <div style={{ marginTop: "50px", border: "5px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}>
                <Container sx={{ padding: 3 }}>
                  <Typography variant="h5" color="white" marginBottom="20px">
                    🙋‍♂️ Find me on ...
                  </Typography>
                  <Container>
                    <Router>
                      <Link to={{ pathname: "mailto:nirmalasabaragamuwa@gmail.com" }} target="_blank">
                        <Gmail />
                      </Link>
                      <Link to={{ pathname: "https://www.linkedin.com/in/nirmala-sabaragamuwa" }} target="_blank">
                        <LinkedIn />
                      </Link>
                      <Link to={{ pathname: "https://twitter.com/Nims_9T8" }} target="_blank">
                        <Twitter />
                      </Link>
                      <Link to={{ pathname: "https://www.facebook.com/nirmala.madhusankha.1/" }} target="_blank">
                        <FaceBook />
                      </Link>
                      <Link to={{ pathname: "https://www.instagram.com/mad_nirmala/" }} target="_blank">
                        <Instagram />
                      </Link>
                      <Link to={{ pathname: "https://wa.me/94719629058" }} target="_blank">
                        <Whatsapp />
                      </Link>
                    </Router>
                  </Container>
                </Container>
              </div>
            </Container>
          </Grid>
        </Grid>
        <Box className="footer">
          <Typography variant="body2" color="white">
            ©️ All Rights Reserved
          </Typography>
        </Box>
      </div>
    </Grow>
  );
};

export default HomePage;
