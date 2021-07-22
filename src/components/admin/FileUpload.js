import React from "react";
// import { connect } from "react-redux";
import { Formik, Field } from "formik";

import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import { ArrowUpIcon } from "@chakra-ui/icons";

import { storage } from "../../services/firebase";

class FileUpload extends React.Component {
  state = {
    theFile: "",
  };

  constructor(props) {
    super(props);

    this.fileInputRef = React.createRef();
    this.fileURLRef = React.createRef();
  }

  handleFileUpload = async (e, setFieldValue) => {
    const file = e.target.files[0];
    console.log(file);
    const storageRef = storage.ref();
    const spaceRef = storageRef.child(`images/${file.name}-${Date.now()}`);

    const upload = await spaceRef.put(file);
    const url = await storageRef
      .child(upload.metadata.fullPath)
      .getDownloadURL();

    setFieldValue("theFile", url);
    this.setState({ theFile: url });
  };

  render() {
    return (
      <Formik initialValues={this.state}>
        {(props) => (
          <Field name="theFile">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.theFile && form.touched.theFile}
                mt={5}
                flexGrow={1}
              >
                <Flex>
                  <IconButton
                    icon={<ArrowUpIcon />}
                    mb={2}
                    onClick={() => this.fileInputRef.current.click()}
                  ></IconButton>
                  <Input
                    type="file"
                    ref={this.fileInputRef}
                    onChange={(e) =>
                      this.handleFileUpload(e, props.setFieldValue)
                    }
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  <FormLabel htmlFor="theFile" ml={3} alignItems="center">
                    Download URL
                  </FormLabel>
                  <Input {...field} id="theFile" ref={this.fileURLRef} />
                  <FormErrorMessage>{form.errors.theFile}</FormErrorMessage>
                  <Button
                    ml={3}
                    onClick={() => {
                      navigator.clipboard.writeText(this.state.theFile);
                    }}
                  >
                    Clip it!
                  </Button>
                </Flex>
              </FormControl>
            )}
          </Field>
        )}
      </Formik>
    );
  }
}

export default FileUpload;
