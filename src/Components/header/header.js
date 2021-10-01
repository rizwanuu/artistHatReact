
import './header.css';

import logo from '../../assests/title.png';
import searchicon from '../../assests/searchicon.svg';

import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <header className="header">
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="icon"><img className="logoimg" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <NavLink to="/" className="link" activeClassName="link active">Home</NavLink>
                        <NavLink to="/getmoney" className="link" activeClassName="link active">Categories</NavLink>
                        <NavLink to="/profile3" className="link" activeClassName="link active">Blog</NavLink>
                        <NavLink to="/profile4" className="link" activeClassName="link active">Pages</NavLink>
                    </Nav>
                    <Nav className="ml-auto dir">
                        <div className="navsearchdiv">
                            {/* <img src={searchicon} alt="searchicon" className="navsearch" /> */}
                            <FiSearch />
                            <input className="searchinput" type="text" placeholder="What are you looking for?" />
                        </div>
                        <NavLink to="/profile" className="link" activeClassName="link active">
                            <button className="navartist">Become an artist</button>
                        </NavLink>
                        <NavLink to="/userregistration" className="linkBtn" activeClassName="linkBtn active">
                            <button className="navartist" style={{ background: "white" }}>Login or Register</button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;