import React from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../../../Components/DropDown";
import Input from "../../../Components/Input/Input";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import classes from "./AddEditPackage.module.css";
function AddEditPackage() {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [recurringType, setRecurringType] = React.useState(null);
  const [price, setPrice] = React.useState;
  const [includePermission, setIncludePermission] = React.useState();
  return (
    <SidebarSkeleton>
      <div className={classes.pageMain}>
        <h1>Add Edit Package</h1>
        <Input setter={setTitle} label="Title" value={title} />
        <Input
          setter={setDescription}
          label="Description"
          value={description}
        />
        <DropDown
          setter={setRecurringType}
          label="Recurring Type"
          option={[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
          value={recurringType}
        />
        <Input setter={setPrice} label="Price" value={price} />
        <div className={classes.permissions}></div>
      </div>
    </SidebarSkeleton>
  );
}

export default AddEditPackage;
const permissions = ["unLimited-Property-Creation"];
