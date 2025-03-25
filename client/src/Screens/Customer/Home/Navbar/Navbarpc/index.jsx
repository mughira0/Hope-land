import React from 'react'
import classes from './index.module.css'
import Button from '../../../../Components/Button/Button'

function Index() {
  const cust_style = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 'larger',
    width: '5%',
    height: '8vh',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border : '1.5px solid black'
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <h3>Hope Land</h3>
      </div>
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/blogs'>Blogs</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact-us'>Contact Us</a></li>
      </ul>
      <Button label={'Login'} customStyle={cust_style} />
    </div>
  )
}

export default Index
