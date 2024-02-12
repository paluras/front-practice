'use client'

import React from "react";
import { useState } from 'react'


function Nav(){
    
const [click, setClick] = useState(false)
    
        function handleClick(){
            setClick(!click)
            console.log("flme"); 
        }
    return(<div className="ihatethis">
        <nav className="desk">
        
        <div className='left-side-nav'>
            <img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/logo.svg'></img>
            
                <button className='dropDownBtn'>Features 
                <img className='notHovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-down.svg'></img>
                <img className='hovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-up.svg'></img>
                    <div className='dropDown'>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-calendar.svg'></img>    To do</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-planning.svg'></img>    Calendar</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-reminders.svg'></img>    Reminders</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-todo.svg'></img>    Planing</a>
                    </div>
                </button>
                <button className='dropDownBtn'>Company  
                <img className='notHovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-down.svg'></img>
                <img className='hovered' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-up.svg'></img>
                    <div className='dropDown'>
                        <a>Histoy</a>
                        <a>Our Team</a>
                        <a>Blog</a>
                    </div>
                </button>
            <button>Careers</button>
            <button>About</button>
            
        </div>
        <div className='right-side-nav'>
          <button>Login</button>
          <button className='registerBtn'>Register</button>
          <img onClick={handleClick} 
          className='menu' src='https://raw.githubusercontent.com/paluras/instrosection/cb730e3afb5e295cc8150e9443eb7832a15bba63/src/assets/icon-menu.svg'></img>
        </div>
        </nav>

        {click? <nav className="mobile-menu">
        <div className="x">
        <img onClick={handleClick} 
          className='menu-close' src='https://raw.githubusercontent.com/paluras/instrosection/1df56129faac12e747d7f0f1092578711d36d3f6/src/assets/icon-close-menu.svg'></img>
          </div>
          <div className='left-side-nav-x'>
           
            
                <button className='dropDownBtn-x'>Features 
                <img className='notHovered-x' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-down.svg'></img>
                <img className='hovered-x' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-up.svg'></img>
                    <div className='dropDown-x'>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-calendar.svg'></img>    To do</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-planning.svg'></img>    Calendar</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-reminders.svg'></img>    Reminders</a>
                        <a><img src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-todo.svg'></img>    Planing</a>
                    </div>
                </button>
                <button className='dropDownBtn-x'>Company  
                <img className='notHovered-x' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-down.svg'></img>
                <img className='hovered-x' src='https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/icon-arrow-up.svg'></img>
                    <div className='dropDown-x'>
                        <a>Histoy</a>
                        <a>Our Team</a>
                        <a>Blog</a>
                    </div>
                </button>
            <button className="x-btn">Careers</button>
            <button className="x-btn">About</button>
            
          
        </div>
        <div className='right-side-nav-x'>
            <button>Login</button>
          <button className='registerBtn-x'>Register</button>
            </div>
        </nav>: null }
        
        </div>
      
    )
}

export default Nav