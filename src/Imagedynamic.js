import "./Imagedynamic.css";
import React from "react"
import foto from "./assets/2396-6.jpg";
export default function Imagedynamic(props) {
  // let text =props;
  // let name =props;
  // let profile =props;
  // let email =props;
  // let phone =props;
  // let heading =props;
  return (
    <>
      <div className="all-padge">
        <img className="foto" src={foto} alt="project4.jpg" />
        <div className="empty-background"></div>
        <div className="p-h1-twobtn">
          {/* <h1 className="myh1">{heading}</h1>
        
          <p className="para"> {text}</p>
          <p className="para"> {name}</p>
          <p className="para"> {profile}</p>
          <p className="para"> {email}</p>
          <p className="para"> {phone}</p> */}


<div className="all-svg">
<div id="cont" data-pct="">
<svg id="svg" width="300" height="180" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
</svg>
</div>

<div id="cont1" data-pct="">
<svg id="svg" width="300" height="160"  version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
</svg>
</div>
<div id="cont2" data-pct="">
<svg id="svg" width="300" height="150"  version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
</svg>
</div>
<div id="cont3" data-pct="">
<svg id="svg" width="300" height="140"  version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
</svg>
</div>
<div id="cont4" data-pct="">
<svg id="svg" width="300" height="170"  version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
</svg>
</div>

</div>    

      </div>
             
      </div>
    </>
  );
}
