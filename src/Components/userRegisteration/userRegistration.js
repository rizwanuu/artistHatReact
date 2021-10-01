
import "./userRegistration.css";

import titleImg from '../../assests/title.png';
import sideart from '../../assests/sideart.png';
import { useState } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import { Login, Signup, socialLogin } from "../../utils/apiCalling";
import { GrGooglePlus } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { useHistory } from "react-router";

const UserRegistrarion = () => {
    const history = useHistory();
    const [signin, setSignin] = useState(true);
    const [signup, setSignup] = useState(false);
    const [termsCheckbox, setTermsCheckbox] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [signupData, setSignupData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country_code: "",
        mobile_number: "",
        send_no_email: false,
    });

    const loginHandleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }
    const loginHandleSubmit = async () => {
        const { data } = await Login(loginData);
        // console.log(data.profile_check);
        if (data.profile_check) {
            history.push("/artistprofile");
        } else {
            history.push("/profile");
        }
    };

    const signupHandleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value })
    }

    const signupHandleSubmit = async () => {
        if (termsCheckbox) {
            await Signup(signupData);
            setSignin(true);
            setSignup(false);
        } else {
            alert("please 'Agree' Terms and conditions. ")
        }
    };

    const responseFacebook = async (response) => {
        const obj = {
            email: response?.email,
            first_name: response?.name?.split(" ")[0],
            last_name: response?.name?.split(" ")[1],
            password: response?.accessToken,
        }
        console.log(response);
        if (response.status === "unknown") {
            history.push("/userregistration");
        } else {
            const { data } = await socialLogin(obj);
            if (data.profile_check) {
                history.push("/artistprofile");
            } else {
                history.push("/profile");
            }
        }
    }
    const responseGoogle = async (response) => {
        const { profileObj } = response;
        const obj = {
            email: profileObj.email,
            first_name: profileObj.givenName,
            last_name: profileObj.familyName,
            password: response.accessToken,
        }
        const { data } = await socialLogin(obj);
        if (data.profile_check) {
            history.push("/artistprofile");
        } else {
            history.push("/profile");
        }
    }

    return (
        <div className="main">
            <div className="formsDiv">
                <img className="titleImg" src={titleImg} alt="titleimg" />
                <div className="regrestrationBtnsDiv">
                    <button
                        className={signin ? "userActive" : "registerBtns"}
                        id="signin"
                        onClick={() => {
                            setSignin(true);
                            setSignup(false);
                        }}
                    >sign in
                    </button>
                    <button className={signup ? "userActive" : "registerBtns"}
                        id="signup"
                        onClick={() => {
                            setSignin(false);
                            setSignup(true);
                        }}
                    >sign up</button>
                </div>
                <div className="signinDiv" id="div1" style={{ display: signin ? "block" : "none" }}>
                    <input className="signinInput" value={loginData.email} onChange={loginHandleChange} type="email" name="email" placeholder="Email" />
                    <input className=" signinInput" value={loginData.password} onChange={loginHandleChange} type="password" name="password" placeholder="Password" />
                    <br />
                    <div className="socialDiv">
                        <GoogleLogin
                            clientId="634829741594-fbs97jduk9s5jun7ia8sqqmslkutatgh.apps.googleusercontent.com"
                            render={renderProps => (
                                <button
                                    className="googleButton"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                    <GrGooglePlus style={{ fill: "orange", fontSize: "18px" }} />
                                </button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId="455550395701733"
                            autoLoad={false}
                            fields="name,email,picture"
                            scope="public_profile,user_friends"
                            callback={responseFacebook}
                            render={renderProps => (
                                <button
                                    className="fbButton"
                                    onClick={renderProps.onClick}>
                                    <FaFacebookF style={{ fill: "orange", fontSize: "18px" }} />
                                </button>
                            )}
                        />
                    </div>
                    <button className="continueBtn" onClick={loginHandleSubmit}>continue</button>
                    <p className="forgotPassword">forgot password</p>
                </div>
                <div className="signupDiv" id="div2" style={{ display: signup ? "block" : "none" }}>
                    <input className="signinInput" value={signupData.first_name} onChange={signupHandleChange} type="text" name="first_name" placeholder="First Name" />
                    <input className="signinInput" value={signupData.last_name} onChange={signupHandleChange} type="text" name="last_name" placeholder="Last Name" />
                    <input className="signinInput" value={signupData.country_code} onChange={signupHandleChange} type="text" name="country_code" placeholder="Country code" />
                    <input className="signinInput" value={signupData.mobile_number} onChange={signupHandleChange} type="number" name="mobile_number" placeholder="Mobile Number" />
                    <input className="signinInput" value={signupData.email} onChange={signupHandleChange} type="email" name="email" placeholder="Email Address" />
                    <input className="signinInput" value={signupData.password} onChange={signupHandleChange} type="password" name="password" placeholder="Password" />
                    <div style={{ display: "flex", marginBottom: "18px" }}>
                        <input
                            type="checkbox"
                            value={signupData.send_no_email}
                            onChange={(e) => setTermsCheckbox(e.target.checked)}
                            className="checkboxInput1"
                            name="termsCheckbox"
                        />
                        <label className="checkboxlabel">
                            By checking this box, I acknowledge that I have reviewed and agree to the
                            Terms and Conditions and Privacy Policy.
                        </label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input
                            type="checkbox"
                            value={signupData.send_no_email}
                            onChange={(e) =>
                                setSignupData({ ...signupData, [e.target.name]: e.target.checked })}
                            className="checkboxInput2"
                            name="send_no_email"
                        />
                        <label className="checkboxlabel">
                            I do not want to receive promotional emails and notifications from
                            ArtistHat
                        </label>
                    </div>
                    <button className="continueBtn" onClick={signupHandleSubmit}>create account</button>
                </div>
            </div>
            <div className="imgContainer">
                <img className="titleImg2" src={titleImg} alt="titleimg" />
                <img className="sideartImg" src={sideart} alt="img" />
            </div>
        </div>
    )
}

export default UserRegistrarion;