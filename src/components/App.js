import React from "react";
import { connect } from "react-redux";

import { Heading } from "@chakra-ui/react";

import { fetchData } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props.data);
    return <Heading>App</Heading>;
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(App);
