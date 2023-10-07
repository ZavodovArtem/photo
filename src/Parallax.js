import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import './Parallax.css'
import fly from './image/fly.png'

function Parallaxx() {
    return(
        <>
        <h1> Parallax</h1>
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
        <br />
        <a href="/contact">Contact</a>
        <br />
        <a href="/test"> TEST</a>
        <h1>sdfsdfsdf</h1>

        {/* <div style={{
            backgroundImage: `url(${require('./image/cat.jpg')})`,
            height: 1000 
            }}>Artem</div> */}

        <div style={{backgroundImage: 'url(image/cat.jpg)', width: 600, height: 2000}}>Julia</div>   

        {/* <ParallaxProvider>
            <div style={{height: '2000px'}}>
                <Parallax y={[-10, 10]}>
                    <div style={{ height: '300px', backgroundColor: "red" }} />
                </Parallax>
                    <div style={{ height: '100px' }} />
                <Parallax y={[-20, 20]}>
                    <div style={{ backgroundColor: 'blue', height: '300px' }} />
                </Parallax>
                    <div style={{ height: '100px' }} />
                <Parallax y={[-400, 400]}>
                    <div style={{ backgroundColor: 'green', height: '300px' }} />
                </Parallax>
            </div>
        </ParallaxProvider> */}
        <div>SSSSSSSSSSSSSSSSSS</div>
        <h1> AAAAAAAAAAAAAAAAAAAAAAAA</h1>

        <ParallaxProvider>
            <div className="parallax-container">
        <Parallax
          className="parallax-background"
          y={[-200, 2000]}
          tagOuter="figure"
        >
          <img
            className="parallax-image"
            src={fly}
            alt="Parallax Background"
          />
        </Parallax>
        <div className="parallax-content">
          <h1>Parallax Effect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>GDKSGBJHSBKJHSDVGF</div>
    </ParallaxProvider>
        
        <h1> FFFJFFFBFBF</h1>
        </>
    )
}
export default Parallaxx