import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import * as React from "react";
import classes from "./popper.module.css";
export default function SimplePopper({ options, open, anchorEl, handleClick }) {
  return (
    <div>
      <style>
        {`
        .MuiBox-root {
  border-radius: 10px !important;
  border :none !important;
  padding-inline: 20px !important;
  background-color: var(--light-gray) !important;
}
      `}
      </style>

      <Popper open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <div className={classes.popperDiv}>
            {options?.map((ele, index) => (
              <p onClick={() => handleClick(ele)}> {ele}</p>
            ))}
          </div>
        </Box>
      </Popper>
    </div>
  );
}
