import React from "react";
import classes from "./ViewPostComponent.module.css";
function ViewPost({ data }) {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.profilePhotoDiv}>
          <img src={data?.author?.photo} />
        </div>
        <div className={classes.right}>
          <p>{data?.author?.name}</p>
          <div className={classes.tagDiv}>
            {data?.tag?.map((ele) => (
              <p> @{ele?.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <h4>{data?.title}</h4>
        <p>{data?.description}</p>
      </div>

      <div className={classes.contentPhotos}>
        <img src={data.photo[0]} alt="" />
      </div>
    </div>
  );
}

export default ViewPost;
