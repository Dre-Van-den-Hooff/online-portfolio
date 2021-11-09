import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhone, FiMail } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";

export default function About() {
  return (
    <>
      <h1>About </h1>
      <div className="profile-card">
        <p margin="1em">
          <em>Dré Van den Hooff</em>
        </p>
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
    </>
  );
}
