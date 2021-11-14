import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" class="navbar-brand">Home</Link>
          <Link to="/projects" class="navbar-brand">Projects</Link>
        </nav>
    </>
    );
};

export default Navbar;
