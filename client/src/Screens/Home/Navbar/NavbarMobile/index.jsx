import React from 'react'
import classes from './index.module.css'
import Button from '../../../../Components/Button/Button'
import { RxHamburgerMenu } from "react-icons/rx";

function index() {
    
    const cust_style={
        backgroundColor:'transparent',
        color:'black',
        fontSize: 'larger',
        width:'5%',
        height:'8vh',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    
      }
  return (
    <div className={classes.navbar}>
         <div className={classes.logo}>
            <h3>Hope Land</h3>
        </div>

        <Button label={<RxHamburgerMenu/>} customStyle={cust_style} />
    </div>

  )
}

export default index