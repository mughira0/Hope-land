import React from 'react'
import SidebarSkeleton from '../../Components/SidebarSkeleton'
import classes from './index.module.css'
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