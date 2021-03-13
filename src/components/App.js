import React from "react";
import { connect } from "react-redux";

import { Container, Spinner } from "@chakra-ui/react";

import { fetchData } from "../actions";

import About from "./About";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.data) {
      const { name, designation, summary } = this.props.data.about;
      return (
        <Container maxW="container.lg" marginTop={5}>
          <About name={name} designation={designation} summary={summary} />
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
