import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logo, userAvatar } from "../../Constant/ImagePath";
import classes from "./SidebarSkeleton.module.css";
const RenderComponent = ({ text, icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation()?.pathname;

  return (
    <div
      onClick={() => navigate(path)}
      className={location == path ? classes.activeMenu : classes.menuMain}
    >
      <div>{icon}</div>
      <p>{text}</p>
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
            <div onClick={() => navigate("/")} className={classes.sideLogoMain}>
              <div className={classes.logoMian}>
                <img src={logo} />
              </div>
            </div>
          </div>
          <RenderComponent
            path={"/"}
            text={"Dashboard"}
            icon={<MdSpaceDashboard color="var(--main-color)" size={30} />}
          />
          <RenderComponent
            path={"/courses"}
            text={"Courses"}
            icon={<MdSpaceDashboard color="var(--main-color)" size={30} />}
          />
          <RenderComponent
            path={"/settings"}
            text={"Sold Lesson"}
            icon={<MdSpaceDashboard color="var(--main-color)" size={30} />}
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
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarSkeleton;
