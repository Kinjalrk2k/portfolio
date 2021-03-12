import React from "react";
import { connect } from "react-redux";

import { Container } from "@chakra-ui/react";

import { fetchData } from "../actions";

import About from "./About";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props.data);
    return (
      <Container maxW="container.lg" marginTop={5}>
        <About />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(App);
