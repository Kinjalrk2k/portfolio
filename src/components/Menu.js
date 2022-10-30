import React from "react";
import { connect } from "react-redux";

import {
  Heading,
  Image,
  Flex,
  Spacer,
  Box,
  Text,
  Center,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Input,
  Link,
} from "@chakra-ui/react";

import CommentedHeading from "./partials/CommentedHeading";
import { HamburgerIcon } from "@chakra-ui/icons";

const Menu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const btnStyles = {
    size: "lg",
    variant: "ghost",
  };

  const onBtnClick = (id) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - 22,
      behavior: "smooth",
    });
    onClose();
  };

  const btnsMetadata = [
    { name: "About", colorScheme: "red", id: "about" },
    { name: "Education", colorScheme: "blue", id: "education" },
    { name: "Skills", colorScheme: "facebook", id: "skills" },
    { name: "Work Experience", colorScheme: "green", id: "work-experience" },
    {
      name: "Volunteer Experience",
      colorScheme: "linkedin",
      id: "volunteer-experience",
    },
    { name: "Projects", colorScheme: "orange", id: "projects" },
    { name: "Documents", colorScheme: "purple", id: "documents" },
    { name: "Contact", colorScheme: "gray", id: "contact" },
  ];

  const renderBtns = () => (
    <>
      {btnsMetadata.map((b) => (
        <Button
          {...btnStyles}
          colorScheme={b.colorScheme}
          onClick={() => onBtnClick(b.id)}
        >
          {b.name}
        </Button>
      ))}
    </>
  );

  return (
    <div
      style={{
        position: "sticky",
        zIndex: 1000,
        top: "1.5rem",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button
        leftIcon={<HamburgerIcon />}
        ref={btnRef}
        colorScheme="purple"
        onClick={onOpen}
        size="lg"
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" alignItems="flex-start">
              {renderBtns()}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Link
              href="mailto:me@kinjal.dev"
              style={{ textDecoration: "none" }}
            >
              <Button variant="outline" mr={3} onClick={onClose}>
                Email me!
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Menu;
