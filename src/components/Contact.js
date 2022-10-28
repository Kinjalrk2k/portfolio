import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CommentedHeading from "./partials/CommentedHeading";
import axios from "axios";
// import emailconfig from "../emailconfig";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendBtnText, setSendBtnText] = useState(`S E N D`);

  const emailRe = /\S+@\S+\.\S+/;

  const clickHandle = (e) => {
    setSendBtnText("Sending...");
    e.preventDefault();
    e.target.checkValidity();
    e.target.reportValidity();

    // console.log(e);
    if (
      name === "" ||
      !emailRe.test(String(email).toLowerCase()) ||
      message === ""
    ) {
      return;
    }

    const payload = {
      name,
      message,
      email,
    };

    axios
      .post(
        "https://lwlyftvjxhrworihykpd.supabase.co/rest/v1/contact",
        payload,
        {
          headers: {
            apikey: process.env.REACT_APP_SUPABASE_KEY,
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
        }
      )
      .then((res) => {
        setSendBtnText("Message sent!");
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        setSendBtnText("Failed to send! :(");
      });
  };

  return (
    <div>
      <CommentedHeading body="Get in Touch" />

      <form>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>
                I'll get back to you in this email!
              </FormHelperText>
            </FormControl>
          </GridItem>
        </Grid>

        <FormLabel mt={3}>Message</FormLabel>
        <Textarea
          rows={3}
          placeholder="Your message goes here..."
          required
          onChange={(e) => setMessage(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            colorScheme="red"
            variant="outline"
            onClick={clickHandle}
            type="submit"
            disabled={
              name === "" ||
              !emailRe.test(String(email).toLowerCase()) ||
              message === ""
            }
          >
            {sendBtnText}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
