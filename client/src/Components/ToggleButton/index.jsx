import React from 'react';
import classes from './index.module.css';

function Index({
    value,
    setInstallment
}) {

    const setToggleState = () => {
        if ( value === true){ setInstallment(false)}
        else{
            setInstallment(true)
        }
    };


    return (
        <div>
            <label className={classes.switch}>
                <input type="checkbox" onChange={setToggleState}/>
                <span className={`${classes.slider} ${classes.round}`}></span>
            </label>
           
        </div>
    );
}

export default Index;
