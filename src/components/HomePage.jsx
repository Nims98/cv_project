import React from "react";
import { Typography, Grid, Container } from "@mui/material";
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
const HomePage = () => {
  return (
    <div>
      <Typography variant="h2" color="white">
        Nirmala Madhusankha
      </Typography>
      <Grid container spacing={1} paddingTop={5}>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <Container>
            <Image />
          </Container>
        </Grid>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Container>
            <div style={{ marginTop: "80px", border: "5px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}>
              <Container sx={{ padding: 3 }}>
                <Typography variant="h3" color="white" marginBottom={3}>
                  Hello there !
                </Typography>
                <Typography variant="h6" color="white">
                  I'm an Undergraduate Engineering student at University of Ruhuna Srilanka.Currently studies under
                  Electrical and Information Engineering department. Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Adipisci impedit eligendi culpa quam a amet voluptatem assumenda similique suscipit, ipsum
                  fugiat doloribus distinctio, nostrum dolor cupiditate ea voluptates commodi delectus.
                </Typography>
              </Container>
            </div>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <Container>
            <div style={{ marginTop: "50px", border: "5px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}>
              <Container sx={{ padding: 3 }}>
                <Typography variant="h5" color="white" marginBottom="20px">
                  ⚙️ Currently used Technologies and Tools
                </Typography>
                <div style={{ diplay: "flex", flexDirection: "column" }}>
                  <VScode />
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
                </div>
              </Container>
            </div>
          </Container>
        </Grid>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Container>
            <div style={{ marginTop: "50px", border: "5px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}>
              <Container sx={{ padding: 3 }}>
                <Typography variant="h5" color="white">
                  🙋‍♂️ Find me ...
                </Typography>
              </Container>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
