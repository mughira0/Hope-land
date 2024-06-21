import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logo, userAvatar } from "../../Constant/ImagePath";
import { BsHousesFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import classes from "./SidebarSkeleton.module.css";
import Searchbar from "../Searchbar";
import { Button } from "react-bootstrap";
const RenderComponent = ({ text, icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation()?.pathname;

  return (
    <div
      onClick={() => navigate(path)}
      className={location == path ? classes.activeMenu : classes.menuMain}
    >
      <div>{icon}</div>
      <p-17>{text}</p-17>
    </div>
  );
};
const SidebarSkeleton = ({ children, heading }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.authReducer);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div className={classes.pageMain}>
        <div
          style={windowSize < 991 && toggle ? { marginLeft: "0" } : {}}
          className={classes.leftMain}
        >
          <div>
              <div className={classes.logo} onClick={() => navigate("/")}>
              <BsHousesFill size={27} style={{marginBottom:'3%'}}/>
              <h5>Hope Land</h5>
              </div>
           
          </div>
          <RenderComponent
            path={"/"}
            text={"Dashboard"}
            icon={<MdOutlineSpaceDashboard color="var(--light-black-color)" size={25} />}
          />
          <RenderComponent
            path={"/listing"}
            text={"Listing"}
            icon={<BsListUl color="var(--light-black-color)" size={25} />}
          />
          <RenderComponent
            path={"/chats"}
            text={"Chats"}
            icon={<IoChatbubbleEllipsesOutline color="var(--light-black-color)" size={25} />}
          />
          <RenderComponent
            path={"/reviews"}
            text={"Reviews"}
            icon={<MdOutlineReviews color="var(--light-black-color)" size={25} />}
          />
          <RenderComponent
            path={"/settings"}
            text={"Setting"}
            icon={<RiSettings4Line color="var(--light-black-color)" size={25} />}
          />
        </div>
        <div className={classes.rightMain}>
        
          <div
            style={
              toggle
                ? { background: "rgb(0 0 0 / 30%)" }
                : { background: "unset", width: "0px", height: "0" }
            }
            className={classes.overFlow}
          ></div>
          <div className={`${[classes.header, classes.rightHeader].join(" ")}`}>
          <h6>Hi, Huzaifa!</h6>
          <div className={classes.rightside}>
          <Searchbar/>
          <div className={classes.bell}><FaBell size={23}/></div>
            <div
              style={toggle ? { marginLeft: "260px" } : { marginLeft: "10px" }}
              onClick={() => setToggle(!toggle)}
              className={classes.menuBar}
            >
              <AiOutlineMenu size={20} />
            </div>
            <div className={classes.headingMain}>
              <p>{heading}</p>
            </div>
            <div>
              <h3>{user?.name}</h3>
              <img src={userAvatar} />
            </div>
            </div>
          </div>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarSkeleton;
