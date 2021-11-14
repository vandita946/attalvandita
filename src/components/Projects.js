import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const Projects = () => {
    return(
    <>
        <Navbar/>
        <div class="card-deck d-flex flex-column align-items-center">
          <div class="card w-75 mt-3 mb-3">
            <img class="card-img-top" src="https://res.cloudinary.com/dfkflvkxo/image/upload/v1636662701/personalwebsite/twitterclone_tjezbc.png" alt="twitter clone"/>
            <div class="card-body">
              <h5 class="card-title">Twitter Clone</h5>
              <p class="card-text">Created a full-stack MERN application to recreate Twitter as part of a Web Development course.</p>
              <p class="card-text"><small class="text-muted">Nov 2021 • Github repo is currently private for grading reasons</small></p>
            </div>
          </div>
          <div class="card w-75 mb-3">
            <video class="card-img-top" controls>
                <source src="https://res.cloudinary.com/dfkflvkxo/video/upload/v1636663320/personalwebsite/Minipaint_k2ohzn.mov"/>
            </video>
            <div class="card-body">
              <h5 class="card-title">Minipaint</h5>
              <p class="card-text">A mini paint app created using C with undo/redo capabilities when hitting Z/Y.</p>
              <p class="card-text"><small class="text-muted">Oct 2021 • Github repo is currently private for grading reasons</small></p>
            </div>
          </div>

        </div>
    </>
    );
};

export default Projects;