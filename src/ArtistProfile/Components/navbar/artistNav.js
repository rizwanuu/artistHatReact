
import './artistNav.css';

import logo from '../../../assests/title.png';

import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import { GrNotification } from "react-icons/gr";
import { GiUsaFlag } from "react-icons/gi";

const ArtistNav = () => {
    return (
        <header className="header">
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="icon"><img className="artistLogo" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <NavLink to="/" className="artistLink" activeClassName="artistLink active">Get $10 Services</NavLink>
                        <NavLink to="/getmoney" className="artistLink" activeClassName="artistLink active">My Projects</NavLink>
                        <NavLink to="/profile3" className="artistLink" activeClassName="artistLink active">Artists</NavLink>
                        <NavLink to="/profile4" className="artistLink" activeClassName="artistLink active">Profile</NavLink>
                        <NavLink to="/profile4" className="artistLink" activeClassName="artistLink active">Account</NavLink>
                    </Nav>
                    <Nav className="ml-auto dir">
                        <div className="navProfile" style={{ borderRight: "1px solid black", display: "flex" }}>
                            <p>Michel G.</p>
                            <div className="profileImgDiv">
                                <img className="profileImg" src={logo} alt="img" />
                            </div>
                            <GrNotification style={{ height: "2rem", width: "1.3rem" }} />
                        </div>
                        <div className="countryFlag">
                            <GiUsaFlag style={{ marginRight: "7px" }} /> <span> EN</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default ArtistNav;