
import { useState } from "react";
import "./profile.css";
import user from '../../assests/user.svg';
import sideart from '../../assests/sideart.png';
import { createProfile } from "../../utils/apiCalling";


const Profile = () => {
    const [profileData, setProfileData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        social_insurance_number: "",
        country: "",
        street_number: "",
        suite: "",
        city: "",
        province: "",
        dob: "",
        hourly_rate: "",
        bio: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value })
    }

    const submitProfile = async () => {
        const  data  = await createProfile(profileData);
        // console.log(data);
    }

    return (
        <>
            <div className="createprofile">
                <div className="createprofileName">
                    <h1 className="createprofileH1">create profile</h1>
                    <div className="image-container">
                        <img className="sideartImg" src={sideart} alt="img" />
                    </div>
                </div>
                <div className="container">
                    <div className="inputdiv">
                        <label className="inputdivlabel">FIRST Name</label>
                        <input
                            className="inputfield"
                            name="first_name"
                            value={profileData.first_name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Type your Fname here"
                        />
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">LAST Name</label>
                        <input
                            className="inputfield"
                            name="last_name"
                            value={profileData.last_name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Type your Lname here"
                        />
                    </div>
                    <div className="inputdiv" style={{ display: "flex", alignItems: "center" }}>
                        <label className="profilelabel">
                            <img src={user} className="profileimg" alt="pic" />
                            <input type="file" id="file-input" />
                        </label>
                        <label className="inputdivlabel">profile picture</label>
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">Social Insurance Number (optional)</label><br />
                        <input
                            className="inputfield"
                            style={{
                                // width: "927px",
                                display: "flex"
                            }}
                            name="social_insurance_number"
                            value={profileData.social_insurance_number}
                            onChange={handleChange}
                            type="text"
                            placeholder="Type your Social Insurance Number here"
                        />
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">country</label>
                        <select
                            className="inputfield"
                            name="country"
                            onChange={(e) =>
                                setProfileData({ ...profileData, "country": e.target.value })}
                        >
                            <option value="volvo">Choose your country </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="twoFieldsInaRow">
                        <div className="inputdiv">
                            <label className="inputdivlabel">Street number and Name</label><br />
                            <input
                                className="inputfield"
                                // style={{ width: "432px"}}
                                type="text"
                                name="street_number"
                                value={profileData.street_number}
                                onChange={handleChange}
                                placeholder="Type your Street here"
                            />
                        </div>
                        <div className="inputdiv">
                            <label className="inputdivlabel">Apr/ Suite</label><br />
                            <input
                                className="inputfield"
                                // style={{ width: "432px"}}
                                type="text"
                                name="suite"
                                value={profileData.suite}
                                onChange={handleChange}
                                placeholder="Type your Apartment  here"
                            />
                        </div>
                    </div>
                    <div className="twoFieldsInaRow">
                        <div className="inputdiv">
                            <label className="inputdivlabel">city</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="city"
                                onChange={(e) =>
                                    setProfileData({ ...profileData, "city": e.target.value })}
                            >
                                <option value="volvo">Choose your City </option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="inputdiv">
                            <label className="inputdivlabel">province</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="province"
                                onChange={(e) =>
                                    setProfileData({ ...profileData, "province": e.target.value })}
                            >
                                <option value="volvo">Choose your Province </option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">email</label><br />
                        <input
                            className="inputfield"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Type your email here"
                        />
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">date of birth</label><br />
                        <input
                            className="inputfield"
                            name="dob"
                            value={profileData.dob}
                            onChange={handleChange}
                            type="date"
                            placeholder="Type your date of birth here"
                        />
                    </div>
                    <div className="twoFieldsInaRow">
                        <div className="inputdiv">
                            <label className="inputdivlabel">hourly rate</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="hourly_rate"
                                onChange={(e) =>
                                    setProfileData({ ...profileData, "hourly_rate": e.target.value })}
                            >
                                <option value="volvo">Choose your hourly rate </option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        {/* <div className="inputdiv">
                            <label className="inputdivlabel">calender</label><br />
                            <select
                                className="inputfield dropDowninputfield"
                                name="calender"
                            onChange={(e) =>
                                setProfileData({ ...profileData, "province": e.target.value })}
                            >
                                <option value="volvo">Choose your calender </option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div> */}
                    </div>
                    <div className="inputdiv">
                        <label className="inputdivlabel">bio</label><br />
                        <textarea
                            name="bio"
                            value={profileData.bio}
                            onChange={handleChange}
                            cols="30"
                            rows="10"
                            className="profiletextarea"
                        ></textarea>
                    </div>
                    <button type="submit" className="createaccount" onClick={submitProfile}>create account</button>
                </div>
            </div>
        </>
    )
}
export default Profile;