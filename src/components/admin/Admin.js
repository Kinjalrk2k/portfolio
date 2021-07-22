import React from "react";
import { connect } from "react-redux";

import { signIn, alreadySignedIn } from "../../actions/auth";
import { fetchData } from "../../actions/data";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Spinner,
  Container,
} from "@chakra-ui/react";

import AdminDrawer from "./AdminDrawer";
import FileUpload from "./FileUpload";

class Admin extends React.Component {
  state = {
    isSubmitBtnClicked: false,
  };

  componentDidMount() {
    this.props.fetchData();
  }

  constructor(props) {
    super(props);
    this.props.alreadySignedIn();
    this.submitRef = React.createRef();
  }

  onLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isSubmitBtnClicked: true });
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    this.props.signIn(email, password);
  }

  renderLoginForm() {
    if (this.props.auth.errorMsg && this.state.isSubmitBtnClicked) {
      this.setState({ isSubmitBtnClicked: false });
    }

    return (
      <Flex
        width="full"
        height="100vh"
        align="center"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="400px" borderWidth={1} borderRadius={8} p={8} boxShadow="lg">
          <Heading>Login as Admin</Heading>
          <Text mt={3} color="red.500">
            {this.props.auth.errorMsg}
          </Text>
          <form onSubmit={(e) => this.onLoginSubmit(e)}>
            <FormControl id="email" mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" required />
            </FormControl>
            <FormControl id="password" mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" required />
            </FormControl>
            <Button type="submit" mt={4} width="full" ref={this.submitRef}>
              {this.state.isSubmitBtnClicked ? <Spinner /> : "Sign In"}
            </Button>
          </form>
        </Box>
      </Flex>
    );
  }

  renderAdminDashboard() {
    return (
      <div>
        <Container maxW="container.xl" mt={3}>
          <Flex>
            <AdminDrawer />
            <Text
              fontSize="3xl"
              textAlign="center"
              flexGrow={1}
              letterSpacing={20}
            >
              ADMIN PANEL
            </Text>
          </Flex>
          {/* <AdminAbout /> */}
          <FileUpload />
        </Container>
      </div>
    );
  }

  render() {
    if (this.props.auth.isLoggedIn === null) {
      return (
        <div>
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
        </div>
      );
    } else if (this.props.auth.isLoggedIn) {
      return this.renderAdminDashboard();
    } else {
      return this.renderLoginForm();
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { auth: state.auth, data: state.data };
};

export default connect(mapStateToProps, {
  signIn,
  alreadySignedIn,
  fetchData,
})(Admin);
