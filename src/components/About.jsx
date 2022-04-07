import React from "react";
import profile_picture from "../images/IMG_0510.png";
import { BsLinkedin, BsInstagram, BsGithub, BsCalendar3, BsGlobe2 } from "react-icons/bs";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export default function About() {
  return (
    <>
      <header className="about-header">About Me</header>
      <div className="card-container">
        <header className="header-image">
          <img src={profile_picture} alt="Dré Van den Hooff" />
        </header>
        <h1 className="name">Dré Van den Hooff</h1>
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
          <p className="text">
            Hello! I'm 19 years old and I study Applied Information Technology at HoGent. I am passionate about web and
            mobile development with React and React Native.
          </p>
        </div>
        <div className="social-container">
          <div className="socials">
            <a href="https://www.linkedin.com/in/dr%C3%A9-van-den-hooff-002296227/" rel="noreferrer" target="_blank">
              <BsLinkedin size="40px" />
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/Dre-Van-den-Hooff" rel="noreferrer" target="_blank">
              <BsGithub size="40px" />
            </a>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/dre.vdh/" rel="noreferrer" target="_blank">
              <BsInstagram size="40px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
