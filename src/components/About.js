import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
    // const[isShown, setIsShown]= useState(false)
  return (
    <div>
      <AboutCard
        title="Career before code"
        subtitle="Pharmacist life"
        text="Hi again, I'm Tom originally I qualified as a Pharmacist from the Univeristy of Nottingham in 2010. 
        After qualifying as a pharmacist I embarked on a career in community pharmacy.
        In 2015 I gained more qualifications from the university of Derby becoming an Independent Prescribing Pharmacist"
        // setIsShown={setIsShown(false)}
        // isShown={isShown}
      />

      <AboutCard
        title="Research Tech"
        subtitle=""
        text="Hi again, I'm Tom originally I qualified as a Pharmacist from the Univeristy of Nottingham in 2010.  "
        // setIsShown={setIsShown(false)}
        // isShown={isShown}
      />
      <AboutCard
        title="Researching careers in Tech"
        subtitle="Pharmacy life with a twist"
        text="Hi again, I'm Tom originally I qualified as a Pharmacist from the Univeristy of Nottingham in 2010.  "
        // setIsShown={setIsShown(false)}
        // isShown={isShown}
      />
    </div>
  );
};

export default About;
