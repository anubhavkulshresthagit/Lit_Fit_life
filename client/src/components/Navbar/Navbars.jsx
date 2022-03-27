import React, { useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import { LinkContainer } from "react-router-bootstrap";

const Navbars = () => {
  const [Active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const onSearch = () => {
    setActive(!Active);
  };
  
  const navShow = () => {
    setShow(!show);
  };
  return (
    <div className={`Navbars ${show ? "ulsh" : ""}`}>
        <div className="containerss">
           <Button onClick={navShow} className="menU" color="primary">
             <MenuIcon/>
            </Button>

         <ul>
           <LinkContainer to='/upload'>
            <li className="navlinks">
              Upload
            </li>
            </LinkContainer>
            <LinkContainer to='/wall'>
            <li className="navlinks">
             FitWall
            </li>
            </LinkContainer>
            <LinkContainer to='/blog'>
            <li className="navlinks">
              Blog
            </li>
            </LinkContainer>
            <LinkContainer to='/challenge'>
            <li className="navlinks">
              Challenge Friend
            </li>
            </LinkContainer>
            <LinkContainer to='/motivation'>
            <li className="navlinks">
              Workout Motivation
            </li>
            </LinkContainer>
            
           
         </ul>  

        {/* <div className={`searchBox ${Active ? "inputb" : ""}`}>
          <i className="searchIcon" onClick={onSearch}>
            <SearchIcon />
          </i>
          <input type="text" placeholder="Search Google or type URL" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbars;
