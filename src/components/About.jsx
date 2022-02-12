import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhone, FiMail } from "react-icons/fi";
import { BsCalendar3, BsGlobe2, BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import profile_picture from "../images/IMG_0510.png";

export default function About() {
  return (
    <>
      <header className="about-header">About</header>
      <div className="profile-card">
        <div className="name-pfp-wrapper">
          <div className="name-container">
            <em className="name">Dré Van den Hooff</em>
          </div>
          <div className="pfp-container">
            <img src={profile_picture} alt="profile_picture" className="profile-picture" />
          </div>
        </div>
        <div className="details">
          <ul>
            <li>
              <GoLocation size="20px" /> Onegem 90 9300 Aalst
            </li>
            <li>
              <FiMail size="20px" /> vandenhooffdre@gmail.com
            </li>
            <li>
              <FiPhone size="20px" /> +32 468 22 84 52
            </li>
            <li>
              <BsCalendar3 size="20px" /> 15/11/2002
            </li>
            <li>
              <BsGlobe2 size="20px" /> Nationality: Belgian
            </li>
          </ul>
        </div>
        <div className="about-me">
          <p>
            <em>About me</em>
            <br />
            <p style={{ fontSize: "0.9em" }}>
              Hello! I'm 19 years old and I study Applied Information Technology at HoGent. I am passionate about web
              development with React and everything tech.
            </p>
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/dr%C3%A9-van-den-hooff-002296227/" target="_blank">
              <BsLinkedin size="30px" />
            </a>
            <a href="https://www.instagram.com/dre.vdh/" target="_blank">
              <BsInstagram size="30px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
