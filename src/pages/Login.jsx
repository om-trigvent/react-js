import React, { useState } from 'react';
import myImage from '../assets/images/hero-bg.jpg';
import '../assets/css/style.css';
import { loginUser } from "../Services/UserServices";
import { doLogin } from '../Auth/Authdetails';
import userContext from "../Auth/UserContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";


import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const userContxtData = useContext(userContext);
    const [loginDetail, setLoginDetail] = useState({
        email: "",
        password: "",
      });

      const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setLoginDetail({
          ...loginDetail,
          [field]: actualValue,
        });
      };

      const handleReset = () => {
        setLoginDetail({
          email: "",
          password: "",
        });
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(loginDetail);
        //validation
        if (
          loginDetail.email.trim() == "" ||
          loginDetail.password.trim() == ""
        ) {
          toast.error("email or Password  is required !!");
          return;
        }

        //submit the data to server to generate token
        loginUser(loginDetail)
          .then((data) => {
            console.log(data);
            //save the data to localstorage
            doLogin(data, () => {
              console.log("login detail is saved to localstorage");
              //redirect to user dashboard page
              userContxtData.setUser({
                data: data.token,
                login: true,
              });
              navigate("/");
            });

            toast.success("Login Success");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong  on sever !!");
          });
      };

    return (
        <>
            <body className="sub_page">
                <div className="hero_area">
                    <div className="bg-box">
                        <img src={myImage} alt="" />
                    </div>
                </div>
                <section className="about_section layout_padding">
                    <div className="container  ">
                        <div className="login-container">
                            <h2>LOG IN</h2>
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={loginDetail.email}
                                        onChange={(e) => handleChange(e,"email")}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={loginDetail.password}
                                        onChange={(e) => handleChange(e,"password")}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-btn">Log In</button>
                            </form>
                            <a href="/register" className="forgot-password-link">if you dont't have account?<strong>Sign up </strong></a>
                            <a href="/forget-password" className="forgot-password-link">Forget Password ? </a>
                        </div>

                    </div>
                </section>

            </body>
        </>
    )
}
export default Login;