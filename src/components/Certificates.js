import React from "react";
import { connect } from "react-redux";
import CommentedHeading from "./partials/CommentedHeading";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Certificates extends React.Component {
  renderSlide() {
    return this.props.certificates.map((certificate) => {
      return <div></div>;
    });
  }

  render() {
    var settings = {
      infinite: true,
      speed: 100,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 500,
    };
    return (
      <div className="section">
        <CommentedHeading body="Certificates" />
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { certificates: state.data.certificates };
};

export default connect(mapStateToprops)(Certificates);
