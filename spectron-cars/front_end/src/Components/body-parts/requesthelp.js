import React from "react";
import { useRef } from "react";
import * as emailjs from "emailjs-com";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RequestHelp() {
  let form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    // Send the email.
    emailjs
      .sendForm(
        "service_b7qq0jk",
        "template_yj50085",
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
    <div className="containter_in_service">
      <h1>Service</h1>
      <p>service</p>
      <div className="row">
        <div className="service_form">
          <h5 className="title">will change</h5>
          <form ref={form} className="fomr_in_service" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                placeholder="Phone"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="mechanic">Mechanic Name</label>
              <select
              // value={mechanicName}
              // onChange={(e) => setMechanicName(e.target.value)}
              >
                <option value="">Select Mechanic</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Location"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="opening-hours">
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday: 9:00 AM - 5:00 PM</li>
            <span></span>
            <li>Tuesday: 9:00 AM - 5:00 PM</li>
            <span></span>
            <li>Wednesday: 9:00 AM - 5:00 PM</li>
            <span></span>
            <li>Thursday: 9:00 AM - 5:00 PM</li>
            <span></span>
            <li>Friday: 9:00 AM - 5:00 PM</li>
            <span></span>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <span></span>
            <li>Sunday: Closed</li>
          </ul>
        </div>
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
  );
}
