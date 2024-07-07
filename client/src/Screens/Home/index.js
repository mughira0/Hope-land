import React, { useState, useEffect } from "react";
import NavbarMobile from "./Navbar/NavbarMobile/index";
import NavbarPC from "./Navbar/Navbarpc/index";
import BannerSection from "./BannerSection/index";
import classes from './index.module.css'
import Button from "../../Components/Button/Button";
import { AiOutlineHome } from "react-icons/ai";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { IoCashSharp } from "react-icons/io5";
import { IoMdBed } from "react-icons/io";
import { LiaBathSolid } from "react-icons/lia";
import { FaRegHeart,FaHeart } from "react-icons/fa";
import Footer from "../../Components/Footer";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const param=[
    {
      name: <AiOutlineHome size={30}/>,
      heading:'Buy Property',
      lines: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      button:'Buy a House'
    },
    {
      name: <IoCashSharp size={30}/>,
      heading:'Sell a Property',
      lines: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      button:'Sell a House'
    },
    {
      name: <FaSortAmountUpAlt size={30}/>,
      heading:'Rent a Property',
      lines: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      button:'Rent a House'
    } 
  ]
  const search_style={
    backgroundColor: 'rgb(144,144,144)',
    color: 'white',
    fontSize: 'larger',
    width: '100%',
    height: '8vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white'
  }
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width < 900 ? <NavbarMobile /> : <NavbarPC />}
      <BannerSection/>

      <div className={classes.heading}><h4>HOW WE HELP OUR CUSTOMERS</h4></div>
      <div className={classes.services}>
        {param.map((ele,index)=>(
        <div className={classes.types}>

            <div className={classes.logo}>
              {ele.name}
            </div>
            <h5>{ele.heading}</h5>
            <p>{ele.lines}</p>
            <Button label={ele.button} customStyle={search_style}/>
        </div>))}
      </div>


      <div className={classes.heading} style={{backgroundColor:'rgb(247, 246, 246)',paddingTop:'3%',height:'20vh'}}><h3>Discover Popular Properties</h3></div>
      <div className={classes.properties}>
    {Array.from({ length: 3 }).map((ele,index)=>(
        <div className={classes.card}>
          <div className={classes.card_top}>
            <div className={classes.tag}>
               <h6>$999</h6>/Month
            </div> 
            <div className={classes.heart_tag}><FaRegHeart size={25}/></div>
          </div>
          <div className={classes.card_bottom}>
            <h6>Luxury Apartment</h6>
            Experience unparalleled elegance and comfort in our luxury apartments, where sophisticated design meets top-tier amenities.
            
            <span><b>Address:</b>DHA Phase 6,Karachi</span>
            
            <div className={classes.icon}>
                <div className={classes.sub_icon}>
                <IoMdBed size={25}/>
                4 Rooms
            </div>
            <div className={classes.sub_icon}>
                <LiaBathSolid size={25}/>
                2 Washroom
            </div>
            </div>
          </div>
        </div>))}
      </div>

      
      <Footer/>
      
      
    </>
  );
}

export default Home;
