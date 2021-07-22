import React from "react";
import { connect } from "react-redux";
import CommentedHeading from "./partials/CommentedHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

class Projects extends React.Component {
  renderSlide() {
    return this.props.projects.map((project) => {
      return (
        <div>
          {/* <LinkBox> */}
          <LinkBox as="address" p="3" m="3" borderRadius="lg">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={project.image} maxHeight="250px" />
            </div>
            <LinkOverlay href={project.link}>
              <Box p="6">
                <Box>{project.title}</Box>
                <Box ml="2" color="gray.600" fontSize="sm">
                  {project.description}
                </Box>
              </Box>
            </LinkOverlay>
          </LinkBox>
          {/* </LinkBox> */}
        </div>
      );
    });
  }

  render() {
    const sliderSettings = {
      dots: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div>
        <CommentedHeading body="Some of my Works" />
        <Slider {...sliderSettings}>
          {this.renderSlide()}
          <div>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="6"
              color="gray.600"
            >
              <LinkOverlay href="https://github.com/kinjalrk2k/">
                <div>
                  <FaGithub size="200" />
                </div>
                See more on my GitHub
              </LinkOverlay>
            </Box>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { projects: state.data.projects };
};

export default connect(mapStateToprops)(Projects);
