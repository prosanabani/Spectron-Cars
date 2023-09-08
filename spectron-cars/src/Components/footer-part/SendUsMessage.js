import React from "react";
import car from '../../images/footer-part/1.png';

export default function SendUsMessage() {
    return (
        <div className="send-us-main">
            <div className="container">
                <div className="left">
                    <h1 className="heading">Send Us Message</h1>
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
                        <textarea name="message" id="message" placeholder="message" cols="30" rows="10"></textarea>
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