import React from "react";
import "./home.css";

const Navbar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/projects">Projects</a>
            </div>
        </nav>
    </>
    );
};

export default Navbar;
