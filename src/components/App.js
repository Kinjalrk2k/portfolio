import React from "react";
import { connect } from "react-redux";

import { Container, Spinner } from "@chakra-ui/react";

import { fetchData } from "../actions/data";

import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import VolunteerExperience from "./VolunteerExperience";
// import Certificates from "./Certificates";

import "./App.css";
import Projects from "./Projects";
import Contact from "./Contact";
import Socials from "./Social";
import Footer from "./Footer";
import Background from "./Background";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.data) {
      return (
        <>
          <Background />
          <Container maxW="container.lg" marginTop={5}>
            <About />
            <Education />
            <Skills />
            <WorkExperience />
            <VolunteerExperience />
            {/* <Certificates /> */}
            <Projects />
            <Contact />
            <Socials />
            <Footer />
          </Container>
        </>
      );
    } else {
      return (
        <div
          style={{
            width: "95vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="xl" />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  // console.log(state.data);
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(App);
