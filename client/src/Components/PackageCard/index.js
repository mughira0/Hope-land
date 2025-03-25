import React from "react";
import Button from "../Button/Button";
import classes from "./PackageCard.module.css";
function PackageCard({ data, onClick, type, loading }) {
  return (
    <div className={classes.cardMain}>
      <div className={classes.heading}>
        <h1>{data?.title}</h1>
        <span className={classes.type}>{data?.type}</span>
      </div>
      <div className={classes.price}>
        <h2>${data?.price}</h2>
        <h3>({data?.recurringType})</h3>
      </div>
      <p>{data?.description.substring(0, 120)}...</p>
      <div className={classes.permission}>
        <h2>Permissions</h2>
        {data?.permission.map((ele, index) => (
          <div className={classes.permissionBox} key={index}>
            <p>{ele}</p>
          </div>
        ))}
      </div>
      <div className={classes.button}>
        {type == "seller" && (
          <Button
            disabled={loading}
            label={loading ? "Loading" : "Get Started"}
            onClick={onClick}
            btnType="normal"
            className={classes.getStartedBtn}
          ></Button>
        )}
      </div>
    </div>
  );
}

export default PackageCard;
// {
//   "_id": "669746511d7f5c08a94b9ddb",
//   "title": "Some Ttile",
//   "permission": [
//     "Unlimited-Property-Creation"
//   ],
//   "type": "basic",
//   "price": 0,
//   "description": "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   "recurringType": "none",
//   "createdAt": "2024-07-17T04:19:29.517Z",
//   "updatedAt": "2024-07-17T04:19:29.517Z",
//   "__v": 0
// }
