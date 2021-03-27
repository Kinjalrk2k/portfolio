import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";

import { HamburgerIcon, ArrowBackIcon } from "@chakra-ui/icons";

import { connect } from "react-redux";
import { alreadySignedIn, logout } from "../../actions/auth";

class AdminDrawer extends React.Component {
  state = {
    isOpen: false,
  };

  onLogoutClick(e) {
    this.props.logout();
  }

  render() {
    return (
      <>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          onClick={() => this.setState({ isOpen: true })}
          icon={<HamburgerIcon />}
        />
        <Drawer
          placement="left"
          size="xs"
          onClose={() => this.setState({ isOpen: false })}
          isOpen={this.state.isOpen}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Admin</DrawerHeader>
              <DrawerBody>
                <List spacing={3}>
                  <ListItem>
                    <Button isFullWidth>About</Button>
                  </ListItem>
                  <ListItem>
                    <Button isFullWidth>About</Button>
                  </ListItem>
                  <ListItem>
                    <Button isFullWidth>About</Button>
                  </ListItem>
                  <ListItem>
                    <Button isFullWidth>About</Button>
                  </ListItem>
                </List>
              </DrawerBody>

              <DrawerFooter>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={() => this.setState({ isOpen: false })}
                >
                  <ArrowBackIcon />
                </Button>
                <Button colorScheme="blue" onClick={() => this.onLogoutClick()}>
                  Logout
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }
}

export default connect(null, {
  alreadySignedIn,
  logout,
})(AdminDrawer);
