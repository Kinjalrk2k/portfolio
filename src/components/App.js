import React from "react";
import { connect } from "react-redux";

import { Container, Spinner } from "@chakra-ui/react";

import { fetchData } from "../actions/data";

import About from "./About";
import Education from "./Education";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.data) {
      return (
        <Container maxW="container.lg" marginTop={5}>
          <About />
          <Education />
        </Container>
      );
    } else {
      return (
        <div
          style={{
            width: "100vw",
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
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(App);
