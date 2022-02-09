import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhone, FiMail } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import profile_picture from "../images/IMG_0510.png";

export default function About() {
  return (
    <>
      <header>About</header>
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
            <li>Nationality: Belgian</li>
          </ul>
        </div>
        <div className="about-me">
          <p>
            <em>About me</em>
            <br />
            <p style={{ fontSize: "0.9em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto beatae quam recusandae qui magnam
              placeat quia aut hic porro non consequuntur corrupti, ab repudiandae ut aliquid deserunt suscipit id
              ratione.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
