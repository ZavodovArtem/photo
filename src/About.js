import React from "react";
import WeatherApp from "./WeatherGG";
import WeatherApхp from "./Weather";

function About() {
    return(
        <>
        <h1>About</h1>
        <a href='/'> Home</a>
        <br />
        <a href="/contact">Contact</a>
        <br />
        <a href="/parallax">Parallax</a>
        <br />
        <a href="/test">TEST</a>
        <WeatherApp/>
        {/* <WeatherAppp/> */}
        <WeatherApхp/>
        
        </>
    )  
  }

export default About;