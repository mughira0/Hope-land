import React from "react";
import { Col, Row } from "react-bootstrap";
import { property2 } from "../../../Constant/ImagePath";
import classes from "./BannerSection.module.css";
function BannerSection() {
  return (
    <div className={classes.banner}>
      <div className={classes.imgDiv}>
        <img src={property2} alt="" />
      </div>
      <Row>
        <Col xl={6} lg={6} md={12}>
          <div className={classes.bannerContent}>
            <div className={classes.boxDiv}>
              <div className={classes.box}> </div>
              <p> We help you realize your dream Home</p>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={12}>
          <div className={classes.form}></div>
        </Col>
      </Row>
    </div>
  );
}

export default BannerSection;
