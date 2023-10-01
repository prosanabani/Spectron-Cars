import React from "react";
import { useState , useRef } from "react";
import car from '../../images/footer-part/1.png';
import * as emailjs from "emailjs-com";
export default function SendUsMessage() {
    // document.write("<p>Hi there!</p>");  


    function PopupDiv() {
        return `<h1>sskacjnsn</h1>`
    }
    let form = useRef();
    //
    function sendEmail(e) {
        e.preventDefault();
        // Send the email.
        emailjs.sendForm('service_duvsrku', 'template_50lp9ya', form.current,'5Xzi9Ko5cId9DMOPf').then(
            (response) => {
                // Success!
                console.log('Email sent successfully!');
                window.alert('Email sent successfully!');
                
            },
            (error) => {
                // Error!
                console.log('Error sending email:', error);
                window.alert('Error sending email:', error);   
            }
        );
    }
    return (
        <div className="send-us-main">
            <div className="container">
                <div className="left">
                    <h1 className="heading">Send Us Message</h1>
                    <div className="left-inputs">
                        <form ref={form} id="send_us_from" onSubmit={sendEmail} >
                            <input id="name" type="text" placeholder="Name" name="name" required />
                            <input id="phone" type="tel" placeholder=" Phone" name="phonenumber" required />
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
                           <textarea name="message" id="message" placeholder="message" ></textarea>     
                           <button type="submit"  id="submit-btn" onClick={PopupDiv}>Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <img src={car} alt="" className="side-img" />
                </div>
            </div>
        </div>







    )
}