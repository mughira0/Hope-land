import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import property5 from '../../../Assets/Images/property5.jpg';
import classes from "./BannerSection.module.css";
import Button from "../../../Components/Button/Button";
import DropDown from "../../../Components/DropDown";

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
  
  const search_style = {
    zindex: -1,
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
  };

  // Define options for the DropDown component
  const propertyOptions = [
    { value: 'All', label: 'All' },
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' },
    { value: 'Plot', label: 'Plot' }
  ];

  const countryOptions = [
    { value: 'All', label: 'All' },
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'America', label: 'America' },
    { value: 'Bangladesh', label: 'Bangladesh' },
  ];

  const cityOptions = [
    { value: 'All', label: 'All' },
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' },
    { value: 'Plot', label: 'Plot' }
  ];

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
        
        <DropDown label={"Property Type"} option={propertyOptions} placeholder="Select Property Type" />
        <DropDown label={"Country"} option={countryOptions} placeholder="Select Country" />
        <DropDown label={"City"} option={cityOptions} placeholder="Select City" />
        
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
