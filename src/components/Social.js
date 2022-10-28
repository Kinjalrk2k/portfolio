import { Link } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import { GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import CommentedHeading from "./partials/CommentedHeading";

function Socials() {
  return (
    <div>
      <CommentedHeading body="My Socials" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontSize: "2.5rem",
          color: "gray",
        }}
      >
        <Link className="social-icon" href="/">
          <HiHome />
        </Link>
        <Link
          className="social-icon"
          href="https://www.linkedin.com/in/kinjal-raykarmakar/"
        >
          <GrLinkedin />
        </Link>
        <Link
          className="social-icon"
          href="https://www.facebook.com/kinjal.raykarmakar"
        >
          <FaFacebookSquare />
        </Link>
        <Link
          className="social-icon"
          href="https://www.instagram.com/kinjalrk2k/"
        >
          <GrInstagram />
        </Link>
        <Link className="social-icon" href="https://www.github.com/kinjark2k">
          <AiFillGithub />
        </Link>
        <Link className="social-icon" href="https://www.github.com/kinjark2k">
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
}

export default Socials;
