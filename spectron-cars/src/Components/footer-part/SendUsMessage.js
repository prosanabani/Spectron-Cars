import React from "react";
import car from '../../images/footer-part/1.png';

export default function SendUsMessage() {
    return (
        <div className="send-us-main">
            <h1 className="heading">Send Us Message</h1>
            <div className="container">
                <div className="left">
                    <div className="left-inputs">
                        <input id="name" type="text" placeholder="Name" name="name" />
                        <input id="phone" type="tel" placeholder="Phone" name="phonenumber" />
                        <input id="email" type="email" placeholder="Email" name="email" />
                        <select id="message-type" name="mtype" >
                            <option>Message Type</option>
                            <option>General Inquiry</option>
                            <option>Feedback</option>
                            <option>Bug Report</option>
                            <option>Feature Request</option>
                            <option>Complaint</option>
                            <option>Collaboration Proposal</option>
                            <option>Other</option>
                        </select>
                        <input id="message" type="text" placeholder="Message" name="massage" />
                    </div>
                    <button type="submit" id="submit-btn">Send Message</button>
                </div>
                <div className="right">
                    <img src={car} alt="" className="side-img" />
                </div>
            </div>
        </div>







    )
}