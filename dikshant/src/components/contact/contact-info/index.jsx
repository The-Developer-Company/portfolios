import React from 'react';
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>
            I would be happy to answer any questions you may have about my portfolio OR any doubts related to Reactjs OR any other frontend development skills!
        </h4>
        <div className="contact-option">
            <FaPhoneAlt />
            <span className="text">+91 9694373681</span>
        </div>
        <div className="contact-option">
            <MdEmail />
            <span className="text">dikshant.dak@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo;
