import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>  

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/project1.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Clone of Nykaa Man</h3>
          <p>
          Nykaa today offers over 1000 + brands and 1,00,000 + products on its website, app and stores
           </p>
          <h4>Tech Stack</h4>
          <p>React . JavaScript . MongoDB . Node Js . Express Js . CSS . Material Ui . FireBase</p>
          <div className="card_btn">
            <button><a target="_blank" href="http://nykaaman-clone.netlify.app">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/stormyvikrant/NYKAAMAN-PROJECT-UNIT4.git"> CODE</a></button>
          </div>
        </div>
      </div>


      <div className="pcards">
        <div className="pimg">
          <img src={"assets/project2.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Movie App</h3>
          <p>
            Movie App link a netflix
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript . expressjs .react </p>
          <div className="card_btn">
            <button><a target="_blank" href="https://jade-mermaid-720727.netlify.app">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/navneetfw15/react_movie_app.git"> CODE</a></button>
          </div>
        </div>
          </div>
          
      

       <div className="pcards">
        <div className="pimg">
          <img src={"assets/project3.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Text Converter</h3>
          <p>
          Text Converter App it convert uppercase to lowercase and copy , count the word
           </p>
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Javascript . Local Storage .react</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://beautiful-nasturtium-524ad7.netlify.app">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/navneetfw15/Text-Converter_react_app.git"> CODE</a></button>
          </div>
        </div>
      </div>

      

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/project4.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Weather-App</h3>
          <p>
         You enter thr loction of anywhere in this app, this app will show the weather of these area
        
            </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS . JavaScript . Localstorage . react</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://deft-entremet-d8f1a7.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/navneetfw15/react-weather_app.git"> CODE</a></button>
          </div>
        </div>
      </div>


          {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/ZoomCar-homepage.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>ZOOMCAR(clone)</h3>
          <p>
            A clone of Zoomcar is a self-drive car rental service.
            </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div>
          */}

         
    </div>
  );
}
