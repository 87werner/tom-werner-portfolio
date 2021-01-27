import React, {useState} from "react";

const AboutCard = (props) => {
    const[isShown, setIsShown]= useState(false)
  return (
    <div className="about-container">
      <h2
        className="about-title"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {props.title}
      </h2>
      {isShown && (
     <div>
      <h4 className="about-subtitle">{props.subtitle}</h4>
      <p className="about-text">{props.text}</p>
      </div>
      )}
    </div>
  );
};

export default AboutCard;
