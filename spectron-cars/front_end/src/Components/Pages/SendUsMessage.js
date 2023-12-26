import React from "react";
import { useState, useRef } from "react";
import car from "../../images/body-parts/SendUsMessage/1.png";
import * as emailjs from "emailjs-com";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SendUsMessage() {
  let form = useRef();
  //
  function sendEmail(e) {
    e.preventDefault();
    // Send the email.
    emailjs
      .sendForm(
        "service_b7qq0jk",
        "template_lpbsqdt",
        form.current,
        "emaUYDoY-d8CZgIzu"
      )
      .then(
        (response) => {
          // Success!
          toast.success("Message sent sucessfully");
        },
        (error) => {
          // Error!
          toast.error("failed to send message");
        }
      );
  }
  return (
    <div className="send-us-main">
      <div className="container">
        <div className="left">
          <h1 className="heading">Send Us Message</h1>
          <div className="left-inputs">
            <form ref={form} id="send_us_from" onSubmit={sendEmail}>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                id="phone"
                type="tel"
                placeholder=" Phone"
                name="phonenumber"
                required
              />
              <input id="email" type="email" placeholder="Email" name="email" />
              <select id="message-type" name="message_type">
                <option>Message Type</option>
                <option>General Inquiry</option>
                <option>Feedback</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Complaint</option>
                <option>Collaboration Proposal</option>
                <option>Other</option>
              </select>
              <textarea
                name="message"
                id="message"
                placeholder="message"
              ></textarea>
              <button type="submit" id="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <img src={car} alt="" className="side-img" />
        </div>
        <ToastContainer
          className={"toast_container"}
          transition={Zoom}
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}
