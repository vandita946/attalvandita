import React from "react";
import Navbar from "./Navbar";
import "./home.css";

const Home = () => {
    return(
    <>
        <Navbar/>
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h2 className="masthead-subheading mb-0">Vandita Attal</h2>
                    <p className="masthead-subtext">Computer Science Graduate Student • Aspiring Software Engineer</p>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href="https://vandita946.github.io/">Click me! I have a new website!</a>


                </div>
            </div>
        </header>
        <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="https://res.cloudinary.com/dfkflvkxo/image/upload/v1594973363/p15snqw8uhc0nfc10vw1c2ryn597.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <h2 className="display-4">About me</h2>
                            <p className="text-justify">
                                Hi! I'm an aspiring Software Engineer, doing my Master's in Computer Science at Northeastern University.
                            </p>
                            <p>
                                I'm from Singapore, where I did my Bachelor's in Economics. Switching to CS has definitely been a challenging, yet rewarding experience for me!
                            </p>
                            <p className="text-justify">
                                Currently looking for internship opportunities in the Software Development space.
                                Available January - August 2022.
                                Located in Boston, MA and open to working remote.
                            </p>
                            <p className="text-justify">
                                Connect with me on LinkedIn, GitHub and view my resume below.
                            </p>
                            <div className="icons">
                            <a href="https://linked.in/vandita-attal"><i className="fab fa-linkedin me-2"></i></a>
                            <a href="https://github.com/vandita946"><i className="fab fa-github-square me-2"></i></a>
                            <a href="https://bit.ly/3CjbWD6"><i className="far fa-file-alt me-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
};

export default Home;
