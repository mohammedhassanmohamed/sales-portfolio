import React from "react"
import img1 from "./assets/intro-bg.jpg"
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";

export default function Home() {





  return (
    <div className="main-page">
<div className="image-bg">
<img  src={img1} alt= "intro"/>
<div className="empty-background"></div>

</div>
<div className="p-h1-twobtn">


<p className="para">
<ReactTyped
strings={["hi im  Mohammed Hassan Mohammed"]}
typeSpeed={150}
backSpeed={100}
loop

/>


</p>
<h1 className="myh1"><ReactTyped
strings={["sales representative, Pre Seller ."]}
typeSpeed={200}
backSpeed={150}
loop

/>
</h1>

<div className="two-button">
<Link className="btn-project" to="/Project">companies</Link> 
<Link className="btn-contact" to="/contact">Contact</Link> 
</div>
</div>
    </div>
  )
}
