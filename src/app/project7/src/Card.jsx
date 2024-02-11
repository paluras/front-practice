import React from "react";
import { Link } from "react-router-dom"

function Card({name, price, id,photo,category}){
    return(
        <div className="div">
            {/* Why lol? */}
        <Link to={"/project7/"+ id.toString()}> <div  id={id} className="card">
            
            <img 
            style={{borderRadius:"20px"}}
            
            src={photo} alt="product" />
                  
            <div className="maker">{category}</div>
            <h3>{name}</h3>
            <div className="price-container">
            <div className="price">
                <h2>$ {price}</h2>
                <div className="offer">50%</div>
            </div>
            <div className="oldprice">{(price + price).toFixed(2)}</div>
            </div>
           
        </div>
        </Link>   
        </div>  
       
    )
}

export default Card