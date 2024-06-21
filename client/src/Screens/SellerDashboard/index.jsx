import React from 'react'
import SellerSidebar from '../../Components/SellerSidebar/index'
import SidebarSkeleton from '../../Components/SidebarSkeleton'
import SellerNavbar from '../../Components/SellerNavbar/index'
import classes from './index.module.css'
import banner from '../../Assets/Images/banner.png'
function SellerDashboard() {
  return (
    <div className={classes.dash}>
        <SidebarSkeleton/>
        {/* {/* <div className={classes.rightpart}>
        <SellerNavbar/>
        <div className={classes.banner}>
            <img src={banner} width="100%" height="100%" />
        </div> 
        </div>
         */}
    </div>
  )
}

export default SellerDashboard