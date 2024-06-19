import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Post } from "../../AxiosFunction/AxiosFunction";
import Button from "../../Components/Button/Button";
import DropDown from "../../Components/DropDown";
import Input from "../../Components/Input/Input";
import { BaseUrl, validateEmail } from "../../Config/apiUrl";
import { logo } from "../../Constant/ImagePath";
import classes from "./Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(typeof avatarPreview, "rolerolerolerole");
  const handleSignup = async () => {
    const apiUrl = BaseUrl("auth/signup");
    const name = `${firstName} ${lastName}`;
    const body = {
      fullName: name,
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
    setIsLoading(true);
    const response = await Post(apiUrl, body);
    if (response !== undefined) {
      toast.success("Signup Successfully");

      navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <>
      <style>
        {`
      .react-tel-input .form-control{
        width:100% !important;
        height:48px !important;
        background: var(--white-color) !important;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
        border:none !important;
      }
      .react-tel-input .flag-dropdown{
          border:none !important;
          background-color: #ebebeb !important;
      }
      `}
      </style>
      <div className={classes.pageMain}>
        <div className={classes.leftMain}>
          <div className={classes.leftImageMain}>
            <img src={logo} />
          </div>
        </div>
        <div className={classes.rightMain}>
          <div className={classes.headerMain}>
            <div className={classes.sideLogoMain}>
              <div onClick={() => navigate("/")} className={classes.logoMian}>
                <img src={logo} />
              </div>
            </div>

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
            {/* <Col xl={6} lg={12}>
              <div className={classes.phoneInputMain}>
                <label>Phone</label>
                <PhoneInput
                  country={"pk"}
                  placeholder={"Phone"}
                  value={String(phone)}
                  onChange={(phone) => setPhone(String(phone))}
                />
              </div>
            </Col> */}
            <Col xl={6} lg={12}>
              <Input
                setter={setEmail}
                value={email}
                label={"Email"}
                placeholder={"Email"}
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
              <DropDown
                setter={setGender}
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
              <div className={classes.btnMain}>
                <Button
                  disabled={isLoading}
                  onClick={() => handleSignup()}
                  label={isLoading ? "Loading..." : "SIGNUP"}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Signup;
