import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <p className="text"> Hey there! I'm </p> <p className="text"> </p>{" "}
        <br />
        <h1 className="title">Tom Werner.</h1>
        <br />
        <h3 className="text">
          I like to build and design software for the web.
        </h3>
        <p className="text text-home">
          I'm a software developer with a twist, before embarking on a career
          change,
          <br />I am a fully qualified pharmacist and independent prescribing
          pharmacist.
        </p>
        <br />
        <p className="text text-home">
          After 10 years in the pharmacy industry I have decided to embark on a
          career in tech industry as software engineer.
        </p>
      </div>
     
        <div className="side-bar-left">
          <ul className="ul-icon">
            <a href="https://github.com/87werner">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/tom-werner-0a0b9b63/">
              <AiOutlineLinkedin className="icon" />
            </a>
          </ul>
        </div>
      
    </div>
  );
};

export default Home;
