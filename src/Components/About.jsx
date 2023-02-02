/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hi, I'm Rebecca! I'm a junior full stack software developer with a focus on frontend development. While my background is in biology and the biomedical sciences, software development is where my passion lies. However, my past educational focus provided me with excellent problem solving skills, a very analytical thought process, and impressive research skills. I am passionate about frontend software development, as I most enjoy the creativity that comes with the design and functional aspects of a website or application. There is nothing I enjoy more than sitting down to work on some CSS. When it comes to the things I love most outside of software development, I enjoy reading, painting, music, and doing puzzles. While my academic life has been very rooted in science and math, my hobbies have always stemmed around the arts. I think this provides me with a good balance and makes me a well-rounded individual. The creativity that I harbor, which make these hobbies so enjoyable for me, is also the same creativity that makes me an excellent frontend developer. Also, my love of doing puzzles in my free time is very representative of my drive as a developer, as once I sit down to work on a puzzle, I don't stop until I'm finished. My coding style is much the same way in that once I set my mind to a project or working out a bug, there is nothing that can stand in my way!"

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Frontend software development",
  "User experience",
  "Backend software development",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
// const detailOrQuote =
//   "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src="https://i.imgur.com/J0va2AB.png" alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Meet Rebecca</h2>
        <p className="large" style={{textAlign: "left"}}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        {/* <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p> */}
      </div>
    </section>
  );
};

export default About;
