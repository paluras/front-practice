import React from "react";
import '../App.css';

 export default function Card(props){

    return(
       <div className="card">
            <div className="img-location">
                <img src={props.img} />
            </div>
            <div className="right-body">
                <div className="location-point">
                    <div className="point-location">
                        <img src="/assets\Fill 219.svg"/>
                        <h3>{props.location}</h3>
                    </div>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
             <div className="location-title">{props.title}</div>   
             <div className="date">
                <h2 className="date-start">{props.startDate} - {props.endDate}</h2>
                
             </div>
             <p>{props.description}</p>
            </div>
        </div>
    )


 }