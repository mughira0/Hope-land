import React from 'react'
import classes from './index.module.css'
import { IoMdSearch } from "react-icons/io";

function Searchbar() {
  return (
    <div className={classes.searchbar}>
        <input type='text' placeholder='Search...' />
        <button><IoMdSearch size={25}/></button>
    </div>
  )
}

export default Searchbar