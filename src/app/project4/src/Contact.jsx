import React from "react";
import github from "../public/icon-github.svg"
import ft from  '../public/icon-frontend-mentor.svg'
import twitter from '../public/icon-twitter.svg'


function Contact(){
    return(
        <div id="contact" className='contact'>
        <div className='inputs'>

         <div className="left">  
                <div>Contact</div>
                <p> I would love to hear about your project and how I could help. Please 
                     fill in the form, and I’ll get back to you as soon as possible.
                </p>
        </div> 
        <div className="right">
                <input type={"text"} placeholder={"name"}></input> 
                <input type={"email"} placeholder={"email"}></input>
                <input type={"text"} placeholder={"message"}></input> 
                <button>SEND MESSAGE</button> 
        </div>
    </div> 
    <footer>
        <h2>adamkeyes</h2>
              <div className='icons'>
                <img src={github} alt="github-icon"></img>
                <img src={ft} alt="fm-icon"></img>
                <img src={github} alt="github-icon"></img>
                <img src={twitter} alt="twitter-icon"></img>
</div>   
              </footer>  
        </div>
    )
}


export default Contact