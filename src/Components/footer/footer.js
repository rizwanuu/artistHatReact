
import "./footer.css";

import playstore from "../../assests/playstore.png";
import appleLogo from "../../assests/apple-logo.png";
const Footer = () => {
    return (
        <div className="footersection">
            <div className="footerdownloadbtns">
                <p className="storetext">Get started faster. <br />Download our app</p>
                <button className="storebtns">
                    <img className="storeimg" src={playstore} alt="playstore" />
                    <div>
                        <span className="goolePlayText">GET IT NOW</span><br />
                        <span className="goolePlay">Google Play</span>
                    </div>
                </button>
                <button className="storebtns">
                    <img className="storeimg" src={appleLogo} alt="playstore" />
                    <div>
                        <span
                            style={{
                                fontSize: "10px",
                                color: "gray",
                                float: "left",
                                marginTop: "8px"
                            }}
                        >Download on the</span><br />
                        <span
                            style={{
                                color: "#523106",
                                fontSize: "1rem",
                                fontWeight: "bold"
                            }}
                        >Mac App Store</span>
                    </div>
                </button>
            </div>
            <div className="footer">
                <div className="footerelements">
                    <p className="footerelementstitle">Discover</p>
                    <p className="footerelementsp">ArtistHat for</p>
                    <p className="footerelementsp">How it works</p>
                    <p className="footerelementsp">business</p>
                    <p className="footerelementsp">Earn money</p>
                    <p className="footerelementsp">new users FAQ</p>
                </div>
                <div className="footerelements">
                    <p className="footerelementstitle">Company</p>
                    <p className="footerelementsp">About us</p>
                    <p className="footerelementsp">Careers</p>
                    <p className="footerelementsp">Media enuiries</p>
                    <p className="footerelementsp">Community</p>
                    <p className="footerelementsp">guidelines</p>
                    <p className="footerelementsp">Tasker principles</p>
                    <p className="footerelementsp">Terms {"&"} <br />conditions</p>
                    <p className="footerelementsp">Blog</p>
                    <p className="footerelementsp">Contact us</p>
                    <p className="footerelementsp">Privacy policy</p>
                </div>
                <div className="footerelements">
                    <p className="footerelementstitle">Existing</p>
                    <p className="footerelementsp">Members</p>
                    <p className="footerelementsp">Post a task</p>
                    <p className="footerelementsp">Browse tasks</p>
                    <p className="footerelementsp">Login</p>
                    <p className="footerelementsp">Support centre</p>
                    <p className="footerelementsp">Merchandise</p>
                </div>
                <div className="footerelements">
                    <p className="footerelementstitle">Popular</p>
                    <p className="footerelementsp">Categories</p>
                    <p className="footerelementsp">Handyman Services</p>
                    <p className="footerelementsp">Cleaning Services</p>
                    <p className="footerelementsp">Delivery Services</p>
                    <p className="footerelementsp">Removalists</p>
                    <p className="footerelementsp">Gradening Services</p>
                    <p className="footerelementsp">Automotive</p>
                    <p className="footerelementsp">Assembly Services</p>
                    <p className="footerelementsp">All Services</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;