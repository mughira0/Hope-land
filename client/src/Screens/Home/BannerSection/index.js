import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import property5 from '../../../Assets/Images/property5.jpg';
import classes from "./BannerSection.module.css";
import Button from "../../../Components/Button/Button";

function BannerSection() {
  const [rangeValue, setRangeValue] = useState(500000);

  const cust_style = {
    backgroundColor: 'rgb(144,144,144)',
    color: 'white',
    fontSize: 'larger',
    width: '3%',
    height: '6vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white'
  };
  const search_style={
    backgroundColor: 'rgb(144,144,144)',
    color: 'white',
    fontSize: 'larger',
    width: '100%',
    height: '6vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white'
  }

  return (
    <div className={classes.banner}>
      <div className={classes.imgDiv}>
        <img src={property5} alt="" />
      </div>
      <div className={classes.text}>
        <h3>Pakistan's Top Leading Real Estate Hub</h3>
        <p>"Discover your dream home with Hopeland - Pakistan's premier destination for top-tier real estate solutions."</p>
        <div className={classes.subbuttons}>
          <Button label={'Buy'} customStyle={cust_style} />
          <Button label={"Sell"} customStyle={cust_style} />
        </div>
      </div>
      <div className={classes.filter}>
        <h6>Find Your Dream House at Affordable Prices</h6>
        
        <select className={classes.option} name="options">
          <option value="" disabled selected>Property Type</option>
          <option value="All">All</option>
          <option value="option1">House</option>
          <option value="option2">Flat</option>
          <option value="option3">Plot</option>
        </select>

        <select className={classes.option} name="options">
          <option value="" disabled selected>Country</option>
          <option value="All">All</option>
          <option value="option1">Pakistan</option>
          <option value="option2">United Kingdom</option>
          <option value="option3">America</option>
          <option value="option4">Bangladesh</option>
          <option value="option5">Malaysia</option>
          <option value="option6">Indonesia</option>
        </select>
        
        <select className={classes.option} name="options">
          <option value="" disabled selected>City</option>
          <option value="All">All</option>
          <option value="option1">House</option>
          <option value="option2">Flat</option>
          <option value="option3">Plot</option>
        </select>
        
        <div className={classes.rangeContainer}>
          <span>0 USD</span>
          <input
            type="range"
            value={rangeValue}
            min={0}
            max={1000000}
            color="black"
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <span>{rangeValue.toLocaleString()} USD</span>
        </div>
        <Button label={'Search'} customStyle={search_style}/>
        </div>
    </div>
  );
}

export default BannerSection;
