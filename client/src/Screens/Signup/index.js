import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Post } from "../../AxiosFunction/AxiosFunction";
import { BaseUrl } from "../../Config/apiUrl";
import Role from "./Role";
import SignUpForm from "./SignUpForm";
import classes from "./Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const [stepper, setStepper] = useState("Role");
  const handleSignup = async (params) => {
    const apiUrl = BaseUrl("auth/signup");
    const body = {
      ...params,
      role,
    };

    setIsLoading(true);
    const response = await Post(apiUrl, body);
    if (response !== undefined) {
      toast.success("Signup Successfully");

      navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.pageMain}>
      {stepper == "Role" && <Role setStepper={setStepper} setRole={setRole} />}
      {stepper == "Form" && (
        <SignUpForm apiCall={isLoading} onClick={handleSignup} />
      )}
    </div>
  );
};

export default Signup;
