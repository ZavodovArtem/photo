import React from "react";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import "./Contact.css"
import { Parallax } from "react-parallax";


function Contact() {
    return(
        <>
        <h1>Contacts</h1>
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
        <br />
        <a href="/parallax">Parallax</a>
        <br />
        <a href="/test">TEST</a>

        
        
        <Parallax strength={400} bgImage="image/cat.jpg">
            <div className="content">
                <div className="text-content">Normal parallax</div>
            </div>
            <Parallax className="two" strength={600} bgImage="image/fly.png">
                <div className="ball"></div>
            </Parallax>
        </Parallax>
       
        <Parallax strength={-400} bgImage="image/fly_water.png">
            <div className="content">
                <div className="text-content">Normal parallax</div>
            </div>
        </Parallax>
        <Parallax strength={1000} bgImage="image/fly.png">
            <div className="content">
                <div className="text-content">Normal parallax</div>
            </div>
        </Parallax>
        
        
        
        </>
    )
}

export default Contact;