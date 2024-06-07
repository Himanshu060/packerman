import React from "react"
import "../styles/frontcard.css";
export default function Frontcard(props) {
    return (
        
        <div className="Front-card">
            <a href={props.link}>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                {/* <img src="./images/phone-icon.png" /> */}
                <p>{props.des}</p>
            </div>
        </a>
        </div>
    )
}