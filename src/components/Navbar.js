import React from "react";
import "./home.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <Link to="/" className="navbar-brand">Home</Link>
            </div>
        </nav>
    </>
    );
};

export default Navbar;
