import React from "react";
import { useState } from "react";
import car from '../../images/footer-part/1.png';
import * as emailjs from "emailjs-com";
export default function SendUsMessage() {

    //
    const [formData, setFormData] = useState({
        name: '',
        phonenumber: '',
        email: '',
        message_type: '',
        message: ''
    });
    //

    const formDataObject = new FormData();
    for (const key of Object.keys(formData)) {
        formDataObject.append(key, formData[key]);
    }


    //
    function sendEmail(e) {
        e.preventDefault();
        // Send the email.
        emailjs.sendForm('service_duvsrku', 'template_50lp9ya', formDataObject).then(
            (response) => {
                // Success!
                console.log('Email sent successfully!');
            },
            (error) => {
                // Error!
                console.log('Error sending email:', error);
            }
        );
    }

    function handelChange(e) {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <div className="send-us-main">
            <div className="container">
                <div className="left">
                    <h1 className="heading">Send Us Message</h1>
                    <div className="left-inputs">
                        <form id="send_us_from" onChange={handelChange}>
                            <input id="name" type="text" placeholder="Name" name="name" />
                            <input id="phone" type="tel" placeholder=" Phone" name="phonenumber" />
                            <input id="email" type="email" placeholder="Email" name="email" />
                            <select id="message-type" name="message_type" >
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
                        </form>
                    </div>
                    <button type="submit" onClick={sendEmail} id="submit-btn">Send Message</button>
                </div>
                <div className="right">
                    <img src={car} alt="" className="side-img" />
                </div>
            </div>
        </div>







    )
}