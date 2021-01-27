import React from 'react'
import JS from "../images/JS.png"
import EX from "../images/ExpressJS.png"
import mongo from "../images/mongoDB.png"
import Node from "../images/nodeJS.png"
import Rjs from "../images/reactJS.png"
import css from "../images/csshtml.png"
import mysql from "../images/mysql.png"
import aws from "../images/AWS2.png"
import GO from "../images/golang.png"
import graphQL from "../images/graphQL.png"
import c from "../images/c-sharp.png"
import style from "../images/styled.png"

const Tech = (props) => {
    return (
        <div>
        <div className="tech-container">
          <h4 className="tech-title">{ props.title}</h4> 
          <div className="image-container">
          <img className="JS-image image" src={JS} alt="Javascript log"></img>
          <img className="Express-image image" src={EX} alt="ExpressJS log"></img>
          <img className="Mongo-image image" src={mongo} alt="mongoDB log"></img>
          <img className="Node-image image" src={Node} alt="NodeJS log"></img>
          <img className="React-image image" src={Rjs} alt="ReactJS log"></img>
          <img className="cssHtml-image image" src={css} alt="CSS3 and HTML5 log"></img>
          <img className="mySQL-image image" src={mysql} alt="mySQL log"></img>
          </div>
          <div className="tech-container">
          <h4 className="tech-title">{ props.title2}</h4> 
          <div className="image-container">
          <img className="AWS-image image" src={aws} alt="AWS log"></img>
          <img className="GO-image image" src={GO} alt="GOLANG log"></img>
          <img className="graphQL-image image" src={graphQL} alt="graphQL log"></img>
          <img className="C#-image image" src={c} alt="C# log"></img>
          <img className="styled-image image" src={style} alt="styled components log"></img>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Tech

