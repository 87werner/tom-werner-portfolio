import React from 'react'
import JS from "../images/JS.png"
import EX from "../images/ExpressJS.png"
import mongo from "../images/mongoDB.png"
import Node from "../images/nodeJS.png"
import Rjs from "../images/reactJS.png"

const Tech = (props) => {
    return (
        <div className="tech-container">
          <h4 className="tech-title">{ props.title}</h4> 
          <img className="JS-image image" src={JS} alt="Javascript log"></img>
          <img className="Express-image image" src={EX} alt="ExpressJS log"></img>
          <img className="Mongo-image image" src={mongo} alt="mongoDB log"></img>
          <img className="Node-image image" src={Node} alt="NodeJS log"></img>
          <img className="React-image image" src={Rjs} alt="ReactJS log"></img>
        </div>
    )
}

export default Tech

