import React, { useState } from 'react';
import myImage from '../assets/images/hero-bg.jpg';
import '../assets/css/style.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../Services/UserServices";
import { useNavigate } from 'react-router-dom';
const  Register = () =>  {
    const navigate = useNavigate();
        const [data, setData] = useState({
          email: "",
          password: "",
        });
        const [error, setError] = useState({
          errors: {},
          isError: false,
        });
        // handle change
        const handleChange = (event, property) => {
          //dynamic setting the values
          setData({ ...data, [property]: event.target.value });
        };

        //reseting the form
        const resetData = () => {
          setData({
            email: "",
            password: "",
          });
        };

        //submit the form
        const submitForm = (event) => {
          event.preventDefault();
          signUp(data)
            .then((resp) => {
              toast.success("User is registered successfully !!");
              navigate('/login');
              setData({
                email: "",
                password: "",
              });
            })
            .catch((error) => {
              console.log(error);
              console.log("Error log");
              setError({
                errors: error,
                isError: true,
              });
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
                            <h2>Sign Up</h2>
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
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
                                        value={data.password}
                                        onChange={(e) => handleChange(e,"password")}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-btn">Sign Up</button>
                            </form>
                            <a href="/login" className="forgot-password-link">if You Have Account?<strong>Login </strong></a>
                        </div>

                    </div>
                </section>

            </body>
        </>
    )
}

export default Register;
