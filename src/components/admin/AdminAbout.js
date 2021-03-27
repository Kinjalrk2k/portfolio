import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";

import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
class AdminAbout extends React.Component {
  handleSubmit(values) {
    console.log(values);
  }

  renderForm() {
    return (
      <Formik initialValues={this.props.about} onSubmit={this.handleSubmit}>
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="designation">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.designation && form.touched.designation
                  }
                  mt={5}
                >
                  <FormLabel htmlFor="designation">
                    Current Designation
                  </FormLabel>
                  <Input {...field} id="designation" />
                  <FormErrorMessage>{form.errors.designation}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="summary">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.summary && form.touched.summary}
                  mt={5}
                >
                  <FormLabel htmlFor="summary">Summary</FormLabel>
                  <Textarea {...field} id="summary" rows={5} />
                  <FormErrorMessage>{form.errors.summary}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Box display="flex" justifyContent="center">
              <Button
                colorScheme="teal"
                variant="outline"
                type="submit"
                width="500px"
                mt={3}
                isLoading={props.isSubmitting}
              >
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }

  render() {
    console.log(this.props);
    if (this.props.about) {
      return (
        <Box p="6" m={3} borderWidth={2} borderRadius={10}>
          <Text fontSize="3xl" textAlign="center">
            About
          </Text>
          {this.renderForm()}
        </Box>
      );
    } else {
      return (
        <Box p="6" m={3} borderWidth={2} borderRadius={10}>
          <Text fontSize="3xl" textAlign="center">
            About
          </Text>
          <Box display="flex" justifyContent="center" mt={3}>
            <Spinner />
          </Box>
        </Box>
      );
    }
  }
}

const mapStateToProps = (state) => {
  if (state.data) {
    return { about: state.data.about };
  } else {
    return { about: null };
  }
};

export default connect(mapStateToProps)(AdminAbout);
