
import React from "react";
import { Slide } from "react-slideshow-image";
import "./home.css";
import arrowleft from "../../assests/arrowleft.png";
import arrowright from "../../assests/arrowright.png";
import user from "../../assests/user.svg";
import sideart from "../../assests/sideart.png";
import profileimg from "../../assests/profileimg.jpeg";
import playstore from "../../assests/playstore.png";
import appleLogo from "../../assests/apple-logo.png";
import redsky from "../../assests/redsky.png";
import painting from "../../assests/painting.png";
import stand from "../../assests/stand.png";
import graffiti from "../../assests/graffiti.png";
import sculpture from "../../assests/sculpture.png";
import mosaic from "../../assests/mosaic.png";
import stars from "../../assests/stars.png";
import { GiPencilBrush } from 'react-icons/gi'


const Home = () => {
    const sliderarr = [1, 2, 3, 4, 5, 6, 7, 8]
    // const style = {
    //     margin: "0 10px"
    // };

    const properties1 = {
        duration: 3000,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        indicators: false,
    };

    const properties2 = {
        duration: 3000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        indicators: false,
    };
    const properties3 = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        indicators: false,
    };
    return (
        <div className="home">
            <div className="section1">
                <div className="creativeway">
                    <h1 className="creativewayh1">get money in a creative way</h1>
                    <p className="creativewayp">Your platforms to show up your art </p>
                    <p className="creativewayp"> and get payed </p>
                    <div className="filters">
                        <p className="filterstext">what are you looking for?</p>
                        <select className="filtersselect" name="cars" id="cars">
                            <option value="volvo">Choose your country </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select className="filtersselect" name="cars" id="cars">
                            <option value="volvo">Choose your country </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button className="filterssearchbtn">search</button>
                    </div>
                    <div className="sliderClass">
                        <Slide {...properties1}>
                            <div className="sliderDiv">
                                <img className="sliderimg" src={user} alt="img" />
                                <p>Magic</p>
                            </div>
                            <div className="sliderDiv">
                                <img className="sliderimg" src={user} alt="img" />
                                <p>Magic</p>
                            </div>
                            <div className="sliderDiv">
                                <img className="sliderimg" src={user} alt="img" />
                                <p>Magic</p>
                            </div>
                            <div className="sliderDiv">
                                <img className="sliderimg" src={user} alt="img" />
                                <p>Magic</p>
                            </div>
                            <div className="sliderDiv">
                                <img className="sliderimg" src={user} alt="img" />
                                <p>Magic</p>
                            </div>
                            <div className="sliderDiv">
                                <img className="sliderimg" src={user} alt="img" />
                                <p>Magic</p>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="creativewayimgdiv">
                    <img className="creativewayimg" src={sideart} alt="img" />
                </div>
            </div>
            <div className="storebtnsdiv">
                <p className="storetext">Get started faster. <br />Download our app</p>
                <div style={{ display: "flex" }}>
                    <button className="storebtns">
                        <img className="storeimg" src={playstore} alt="playstore" />
                        <div>
                            <span
                                style={{ fontSize: "8px", color: "gray", float: "left", marginTop: "12px" }}
                            >GET IT NOW</span><br />
                            <span
                                style={{ color: "#523106", fontSize: "12px" }}
                            >Google Play</span>
                        </div>
                    </button>
                    <button className="storebtns">
                        <img className="storeimg" src={appleLogo} alt="playstore" />
                        <div>
                            <span
                                style={{ fontSize: "8px", color: "gray", float: "left", marginTop: "12px" }}
                            >Download on the</span><br />
                            <span
                                style={{ color: "#523106", fontSize: "12px" }}
                            >Mac App Store</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="ourCategories container">
                <div className="headtext">
                    <h1 className="headtexth1">our categories</h1>
                    <p className="headtextp">Choose the category you awesome for</p>
                </div>
                <div className="categoriesboxes">
                    <div className="categorybox">
                        <img className="categoryboximg" src={painting} alt="img" />
                        <h2>Painting</h2>
                        <p>Painting that help artists express their creativity.</p>
                    </div>
                    <div className="categorybox">
                        <img className="categoryboximg" src={sculpture} alt="img" />
                        <h2>Painting</h2>
                        <p>Painting that help artists express their creativity.</p>
                    </div>
                    <div className="categorybox">
                        <img className="categoryboximg" src={stand} alt="img" />
                        <h2>Painting</h2>
                        <p>Painting that help artists express their creativity.</p>
                    </div>
                    <div className="categorybox">
                        <img className="categoryboximg" src={graffiti} alt="img" />
                        <h2>Painting</h2>
                        <p>Painting that help artists express their creativity.</p>
                    </div>
                    <div className="categorybox">
                        <img className="categoryboximg" src={mosaic} alt="img" />
                        <h2>Painting</h2>
                        <p>Painting that help artists express their creativity.</p>
                    </div>
                    <div className="categorybox">
                        <img className="categoryboximg" src={stand} alt="img" />
                        <h2>Painting</h2>
                        <p>Painting that help artists express their creativity.</p>
                    </div>
                </div>
            </div>
            <div className="artistsection container">
                <div className="headtext">
                    <h1 className="headtexth1">best artist</h1>
                    <p className="headtextp">Look how creative they are</p>
                </div>
                <Slide {...properties2}>
                    {
                        sliderarr.map(item => (
                            <div className="artistsliderbox" key={item}>
                                <img className="artistsliderimg" src={profileimg} alt="img" /><br />
                                <p className="artistsliderspan">Michel<br /> Goroguos</p>
                                <div className="artistsliderinnerbox">
                                    <p className="artistsliderinnerboxp" style={{ color: "#523106", fontSize: "11px", fontWeight: "800", marginBottom: "6px" }}>I’m the creative person for the job:</p>
                                    <p className="artistsliderinnerboxp" style={{ fontSize: "11px", color: "#817889", textTransform: "initial", margin: "0" }}>Experienced in the home and commercial renovation
                                        field. I have the tools and experience for
                                        all you…
                                    </p>
                                    <span style={{ display: "flex", justifyContent: "flex-end", color: "orange", fontWeight: "lighter" }}>Read more</span>
                                </div>
                                <div className="artistsliderreviews">
                                    <p>Sculptural Artist <br />128k followers <br /> 26 projects</p>
                                    <img src={stars} alt="img" />
                                </div>
                            </div>
                        ))
                    }
                </Slide>
            </div>
            <div className="createyourteamsection container">
                <div className="createyourteamsectiontextdiv1">
                    <p className="createyourteamsectionp">
                        <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                    </p>
                    <p className="createyourteamsectionp">
                        <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                    </p>
                    <p className="createyourteamsectionp">
                        <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                    </p>
                </div>
                <img className="createyourteamsectionImg" src={sideart} alt="img" />
                <div className="createyourteamsectiontext">
                    <h1 className="createyourteamsectionh1">create your team of creatives</h1>
                    <p className="createyourteamsectionp1">
                        Lorem ipsum, dolor sit amet consectetur amet <br />
                        adipisicing elit Quisquam ab dolorum,<br />
                        numquam voluptate commodi Quisquam
                    </p>
                    <div className="createyourteamsectiontextdiv2">
                        <p className="createyourteamsectionp">
                            <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                        </p>
                        <p className="createyourteamsectionp">
                            <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu  consectetu job</p>
                        <p className="createyourteamsectionp">
                            <GiPencilBrush style={{ fill: "orange", marginRight: "10px", marginLeft: "-30px" }} /> compare artist dolor sit amet consectetu
                        </p>
                    </div>
                </div>
            </div>
            <div className="trustcardsection container">
                <div className="headtext">
                    <h1 className="headtexth1">trusted by over 100k+ users</h1>
                    <p className="headtextp">See how Artists are changing the place for people like you.</p>
                </div>
                <div style={{ marginTop: "5rem", marginBottom: "6rem" }}>
                    <Slide {...properties3}>
                        {
                            sliderarr.map(item => (
                                <div key={item} >
                                    <div className="trustedusercard">
                                        <div className="trustedusercardprofile">
                                            <img className="trustedusercardprofileimg" src={sideart} alt="img" />
                                            <div className="trustedusercardprofilename">
                                                <p className="trustedusercardprofiletitle">Maxime Barbosa</p>
                                                <p className="trustedusercardprofilep">october 18,2019, New York City </p>
                                                <div style={{ display: "flex" }}>
                                                    <p className="trustedusercardprofilep">Sculptural</p>
                                                    <p className="trustedusercardprofilep">******</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="trustedusercardtext">
                                            When I stand before God at the end of my life,
                                            I would hope that I would not have a single
                                            bit of talent left and could say,
                                            I used everything you gave me.
                                        </p>
                                    </div>
                                    <div className="trustedusercard">
                                        <div className="trustedusercardprofile">
                                            <img className="trustedusercardprofileimg" src={sideart} alt="img" />
                                            <div className="trustedusercardprofilename">
                                                <p className="trustedusercardprofiletitle">Maxime Barbosa</p>
                                                <p className="trustedusercardprofilep">october 18,2019, New York City </p>
                                                <div style={{ display: "flex" }}>
                                                    <p className="trustedusercardprofilep">Sculptural</p>
                                                    <p className="trustedusercardprofilep">******</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="trustedusercardtext">
                                            When I stand before God at the end of my life,
                                            I would hope that I would not have a single
                                            bit of talent left and could say,
                                            I used everything you gave me.
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
            </div>
            <div className="howitworksecion container">
                <div className="headtext">
                    <h1 className="headtexth1">How it works</h1>
                    <p className="headtextp">How you get played</p>
                </div>
                <div className="howitworkcards">
                    <div className="howitworkcard">
                        <img className="howitworkcardimg" src={sideart} alt="img" />
                        <div className="howitworkcardtext">
                            <p className="howitworkcardtext1">Describe Your Art Project</p>
                            <p className="howitworkcardtext2">Tell us what you need done, when and where it works for you.</p>
                        </div>
                    </div>
                    <div className="howitworkcard">
                        <img className="howitworkcardimg" src={sideart} alt="img" />
                        <div className="howitworkcardtext">
                            <p className="howitworkcardtext1">Describe Your Art Project</p>
                            <p className="howitworkcardtext2">Tell us what you need done, when and where it works for you.</p>
                        </div>
                    </div>
                    <div className="howitworkcard">
                        <img className="howitworkcardimg" src={sideart} alt="img" />
                        <div className="howitworkcardtext">
                            <p className="howitworkcardtext1">Describe Your Art Project</p>
                            <p className="howitworkcardtext2">Tell us what you need done, when and where it works for you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "10rem" }}>
                <div className="headtext">
                    <h1 className="headtexth1">Articles stories and more</h1>
                    <p className="headtextp">How the art make our live different</p>
                </div>
                <div className="articlestorysection">
                    <div className="articlestorysection1">
                        <div className="articlestorysectioncard">
                            <div className="articlestorysectioncardtext">
                                <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                <p className="articlestorysectioncardp2">
                                    Your Artist arrives
                                    and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                </p>
                            </div>
                            <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                        </div>
                        <div className="articlestorysectioncard">
                            <div className="articlestorysectioncardtext">
                                <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                <p className="articlestorysectioncardp2">
                                    Your Artist arrives
                                    and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                </p>
                            </div>
                            <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                        </div>
                    </div>
                    <div className="articlestorysection1">
                        <div className="articlestorysectioncard">
                            <div className="articlestorysectioncardtext">
                                <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                <p className="articlestorysectioncardp2">
                                    Your Artist arrives
                                    and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                </p>
                            </div>
                            <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                        </div>
                        <div className="articlestorysectioncard">
                            <div className="articlestorysectioncardtext">
                                <p className="articlestorysectioncardp1">35 beautiful black bedroom ideas</p>
                                <p className="articlestorysectioncardp2">
                                    Your Artist arrives
                                    and gets the job done. Pay securely and leave a review, all through ArtistHat.
                                </p>
                            </div>
                            <img className="articlestorysectioncardimg" src={redsky} alt="redsky" />
                        </div>
                    </div>
                </div>
                <button className="articlestorysectionbutton">see more blogs</button>
            </div>
        </div>
    )
}
export default Home;