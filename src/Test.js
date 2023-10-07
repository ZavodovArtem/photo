import React from "react";
import { Parallax, ParallaxLayer} from "@react-spring/parallax";
import cat from "./image/cat.gif"


function Test () {
    return (
        <>
        <h1> TEST</h1>
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
        <br />
        <a href="/contact">Contact</a>
        <br />
        <a href="/parallax">Parallax</a>


        <div>
            <Parallax pages={4}>
                <ParallaxLayer speed={1} factor={1.7} style={{backgroundImage: 'url(image/cat.jpg)', backgroundSize: 'cover'}}>
                    <h1>Hello</h1>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.3} factor={4} style={{backgroundImage: 'url(image/cat.jpg)', backgroundSize: 'cover'}}>
                    <h1>My friend </h1>
                </ParallaxLayer>

                <ParallaxLayer sticky={{start:0.2, end: 2.6}}>
                    <h1>Hello</h1>
                    <img src={cat} />
                </ParallaxLayer>

                
            </Parallax>
        </div>
        </>
    );  
};

export default Test