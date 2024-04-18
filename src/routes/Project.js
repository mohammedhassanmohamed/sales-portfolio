import React from "react";
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



 

   
      
      
<div className="image-bg">
<img id="mainimg"  src={foto} alt= "intro"/>
<div className="empty-background"></div>

</div>

<Slider/>

    </>
  );
};

export default Project;
