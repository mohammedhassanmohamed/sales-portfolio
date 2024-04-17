import React from "react";
import Imagedynamic from "../Imagedynamic";
import moahmmedfoto from"../assets/received_457698578514765.jpeg";
import foto from "../assets/2396-6.jpg";
import "./Aboutus.css";
const Aboutus = () => {

  return (
    <>
      <div className="all-padge">
      <img className="foto" src="https://static6.depositphotos.com/1035653/579/i/450/depositphotos_5791965-stock-photo-old-room-background.jpg" alt="project4.jpg" />
      <div className="empty-background"></div>
        <div className="all-text">
          <h1 className="myh1">ABOUT</h1>
        
          <p className="para"> Im afriendly sales representative, Pre Seller  </p>
          <p className="para"> Name:Mohammed Hassan Mohammed Mohammed</p>
          <p className="para">Profile: sales representative, Pre Seller </p>
          <p className="para">Education :Faculty of law - cairo University, Egypt graduated 2012</p>
          <p className="para"> Phone: +201029632345 , age: 35</p>
         
          <p className="para"> Driving License : • Egypt Driving professional licence • Saudi arabia driving license </p>
          <p className="para"> Languages  : • Arabic: Native • English: good  </p>
          <p className="para"> Course   :• Passed English level8 out of future technology in giza - March, 2012. • ICDL (International Computer) - 2010. • programmer (front End developer) - 2022 </p>
          <p className="para"> Computer Skills  : • programmer  front end web developer html,css,js,react js. • Microsoft Office, Internet Explorer. • course of English level 9 (future technology).  </p>
          <p className="para"> Additional Information : • Date of birth: 23/12/1988  </p>
</div>

        
        <div className="my-personal-foto-div"> 
          <img className="personal-foto" width="200px" src={moahmmedfoto} alt="my-personal-photo"/>
           </div>
      
      </div>
      <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    </>
  
  );
};

export default Aboutus;
