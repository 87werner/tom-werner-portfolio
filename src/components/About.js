import React from "react";
import AboutCard from "./AboutCard";
import Tech from "./Tech";
import JS from "../images/JS.png"


const About = () => {
  return (
    <div>
      <div className="first-AboutCard">
        <AboutCard
          title="Career before code"
          subtitle="Pharmacist life"
          text="Hi again, I'm Tom originally I qualified as a Pharmacist from the Univeristy of Nottingham in 2010. 
        After qualifying as a pharmacist I embarked on a career in community pharmacy.
        In 2015 I gained more qualifications from the university of Derby becoming an Independent Prescribing Pharmacist"
        />
      </div>

      <AboutCard
        title="Researching Tech"
        subtitle="The journey starts"
        text="Hi again, I'm Tom originally I qualified as a Pharmacist from the Univeristy of Nottingham in 2010.  "
      />
      <AboutCard
        title="Researching careers in Tech"
        subtitle="Pharmacy life with a twist"
        text="Hi again, I'm Tom originally I qualified as a Pharmacist from the Univeristy of Nottingham in 2010.  "
      />
      <div className="Tech-container">
        <Tech 
        title="Some of the tech that I like to play with:"
        title2="Tech that I want to learn more about:"
         />
      </div>
    </div>
  );
};

export default About;
