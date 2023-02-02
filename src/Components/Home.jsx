/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
// import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

const Home = () => {
  return (
    <section id="home" className="dark">
      <img className="background" src="https://i.imgur.com/CvLhyE3.jpg" alt="" />
      <div style={{ position: "absolute", top: "30%", left: "2rem" }}>
        <h1>Rebecca Fulkerson</h1>
        <h2>Frontend Software Developer</h2>
      </div>
      <div style={{ position: "absolute", bottom: "8rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="" />
      </div>
    </section>
  );
};

// Home.defaultProps = {
//   name: "Rebecca Fulkerson",
//   title: "Frontend Software Developer",
// };

// Home.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Home;
