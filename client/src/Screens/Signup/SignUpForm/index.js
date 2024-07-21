import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../Components/Button/Button";
import DropDown from "../../../Components/DropDown";
import Input from "../../../Components/Input/Input";
import { validateEmail } from "../../../Config/apiUrl";
import classes from "./SignUp.module.css";
function SignUpForm({ onClick, apiCall }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSignup = async () => {
    const body = {
      fullName: [firstName, lastName].join(" "),
      email,
      birthDate,
      gender: gender.value,
      password,
    };
    for (let key in body) {
      if (body[key] == "" || body[key] == null) {
        return toast.error("Please Fill All Fields");
      }
    }
    if (body?.password !== confirmPassword) {
      return toast.error(
        "The password and confirmation password do not match."
      );
    }
    if (!validateEmail(body?.email)) {
      return toast.error("Please Fill Valid Email");
    }
    if (body?.password?.length < 8) {
      return toast.error("Password Should be greater than 8 character");
    }
    onClick(body);
  };
  return (
    <div className={classes.main}>
      {" "}
      <div className={classes.rightMain}>
        <div className={classes.headerMain}>
          <div className={classes.alreadyMain}>
            <Link to={"/login"}>Already have account ?</Link>
            <Button onClick={() => navigate("/login")} label={"Login"} />
          </div>
        </div>

        <h2>Signup Now!</h2>
        <Row className={"gy-4"}>
          <Col xl={6} lg={12}>
            <Input
              setter={setFirstName}
              value={firstName}
              label={"First Name"}
              placeholder={"First Name"}
            />
          </Col>
          <Col xl={6} lg={12}>
            <Input
              setter={setLastName}
              value={lastName}
              label={"Last Name"}
              placeholder={"Last Name"}
            />
          </Col>
          <Col xl={6} lg={12}>
            <Input
              setter={setBirthDate}
              value={birthDate}
              type={"date"}
              label={"Birth Date"}
              placeholder={"Birth Date"}
            />
          </Col>

          <Col xl={6} lg={12}>
            <Input
              setter={setEmail}
              value={email}
              label={"Email"}
              placeholder={"Email"}
            />
          </Col>
          <Col md={12}>
            <DropDown
              setter={(value)=>setGender(value)}
              value={gender}
              option={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              label={"Gender"}
              placeholder={"Gender"}
            />
          </Col>
          <Col md={12}>
            <Input
              setter={setPassword}
              value={password}
              type={"password"}
              label={"Password"}
              placeholder={"Password"}
            />
          </Col>
          <Col md={12}>
            <Input
              setter={setConfirmPassword}
              value={confirmPassword}
              type={"password"}
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
            />
          </Col>

          <Col md={12}>
            <div className={classes.btnMain}>
              <Button
                disabled={isLoading}
                onClick={() => handleSignup()}
                label={apiCall ? "Loading..." : "SIGNUP"}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignUpForm;
