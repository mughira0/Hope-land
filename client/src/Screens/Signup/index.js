import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Post } from "../../AxiosFunction/AxiosFunction";
import { BaseUrl } from "../../Config/apiUrl";
import Role from "./Role";
import classes from "./Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const [stepper, setStepper] = useState("Role");
  const [setPackages] = useState([]);
  const handleSignup = async () => {
    const apiUrl = BaseUrl("auth/signup");
    const body = {};

    setIsLoading(true);
    const response = await Post(apiUrl, body);
    if (response !== undefined) {
      toast.success("Signup Successfully");

      navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.main}>
      {stepper === "Role" && <Role setStepper={setStepper} setRole={setRole} />}
      {stepper === "Form" && <Signup />}
    </div>
  );
};

export default Signup;
