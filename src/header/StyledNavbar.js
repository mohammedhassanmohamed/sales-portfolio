import { Link } from "react-router-dom";
import "./StyledNavbar.css";
import { useState } from "react";
import React from "react"
const Navbar = () => {
  const [click, setclick] = useState(false);
const[color,setcolor]=useState(false);

const changecolor = ()=>{
if (window.scrollY>=50) {
  setcolor(color===true)
}else{setcolor(color===false)}

}
window.addEventListener("scroll",changecolor);


  const handlechange = () => setclick(!click);

  return (
    <div>
      <header className={color ? "header header-bg" : "header header"}>
        <Link to="/">
          <h1 className="portofolio">Portofolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
          {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
          <li className="text-decoration-none">
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Summary">Summary</Link>
          </li>
          <li>
            <Link to="/Aboutus">About us</Link>
          </li>
          <li>
            <Link to="/Mainresponsibilitie">Main responsibilities</Link>
          </li>
          <li>
            <Link to="/Project">Companies</Link>
          </li>
        </ul>

        <div id="mydivicon" onClick={handlechange}>
          {click?(
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width="30"
 height="30"
 fill="currentColor"
 className="text-light bi bi-x-lg"
 viewBox="0 0 16 16"
>
 <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
</svg>
          ):( <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-distribute-vertical"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"
            />
            <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
          </svg>
 )}
           
        </div>
      </header>
    </div>
  );
};
export default Navbar;
