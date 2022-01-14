import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-lg-4 col-12 ms-2 ms-md-0 col-md-4 navItem">
        <div className="contactInfo">
          <h5 className="mt-4 mb-4">Contact Info</h5>
          <p>North Melbourne VIC 3051, England.</p>
          <p>++0234 324 232</p>
          <p>E-mail: LeaernSchool@gmail.com</p>
          <span className="socialIcon">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-pinterest-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-snapchat-square"></i>
          </span>
        </div>
      </div>

      <div className="col-lg-2 col-6 col-md-4 navItem">
        <h5 className="mt-4 mb-4">Our Company</h5>
        <p>Our Company</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Community</p>
        <p>Student Perks</p>
        <p>Blog</p>
      </div>

      <div className="col-lg-2 col-md-4 col-6 navItem">
        <h5 className="mt-4 mb-4">Topics</h5>
        <p>HTML</p>
        <p>CSS</p>
        <p>Design</p>
        <p>JavaScript</p>
        <p>Ruby</p>
        <p>PHP</p>
      </div>

      <div className="col-lg-2 col-md-4 col-6 navItem">
        <h5 className="mt-4 mb-4">Tracks</h5>
        <p>Web Design </p>
        <p>Web Developement</p>
        <p>Rails Development</p>
        <p>PHP Development</p>
        <p>Android Development</p>
        <p>Starting a Buisness</p>
      </div>

      <div className="col-lg-2 col-6 col-md-4 navItem">
        <h5 className="mt-4 mb-4">Support</h5>
        <p>Documentation</p>
        <p>Forums</p>
        <p>Language Packs</p>
        <p>Release Status</p>
      </div>

      <hr className="w-75" style={{ marginLeft: "15%" }} />
      <div className="d-flex justify-content-center navItem">
        <p>Home</p>
        <p className="ms-4">Cookie</p>
        <p className="ms-4">Policy</p>
      </div>
    </div>
  );
};

export default Footer;
