import React from "react";
// import Imagedynamic from "../Imagedynamic";
import "./Project.css";
import projectfoto from "../assets/ma-pro.PNG";
import foto from "../assets/2396-6.jpg";
import rashdeen from "../assets/432189710_783251977165753_5617921357546620908_n.jpg";
import img1 from "../assets/intro-bg.jpg"
// import { MDBContainer } from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import Slider from "../slider/Slider";
const Project = () => {
  return (
    <>



 

      {/* <div className="all-padge"> */}
      {/* <img className="foto" src={foto} alt="project4.jpg" /> */}
      
<div className="image-bg">
<img id="mainimg"  src={foto} alt= "intro"/>
<div className="empty-background"></div>

</div>

<Slider/>
 {/* <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src={rashdeen}
        className="rounded-3"
        style={{ width: "300px",height:"30vh",marginTop:"130px",marginLeft:"30px" }}
        alt="Avatar"
      />
     
    </MDBContainer>  */}
   
       
        {/* <div id="image-project">
          <a href="https://productions-project-ecommerce.vercel.app/" rel="noreferrer"  target="_blank">
            <img className="projectfoto" src={foto} alt="projectfoto"  />
      
          </a> 
         </div> */}
      
{/* <div className="all-svg"> */}



    {/* </div>  */}
    </>
  );
};

export default Project;
