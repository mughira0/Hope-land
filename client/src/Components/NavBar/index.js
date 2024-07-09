import React, { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  let Login = true;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return <div>{windowSize > 991 ? <DesktopNavbar /> : <MobileNavbar />}</div>;
};

export default Header;
