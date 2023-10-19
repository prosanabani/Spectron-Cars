import React from "react";
import { useRef, useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RequestHelp() {
  let form = useRef();
  const [location, setLocation] = useState("");
  console.log(form.current);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

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
  let userLocation = [location.latitude, location.longitude];
  return (
    <div className="container_in_service">
      <h1 className="heading">Request a Service</h1>
      <p></p>
      <div className="row">
        <div className="service_form">
          <h5 className="title">What help do you need</h5>
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
                name="phoneNumber"
                type="tel"
                placeholder="Phone"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="mechanic">Mechanic Name</label>
              <select
                id="mechanic_input"
                name="mechanicName"
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
                name="email"
                type="email"
                placeholder="Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* ///////////data////////// */}
            <input
              type="hidden"
              name="latitude"
              value={location.latitude}
            ></input>
            <input
              type="hidden"
              name="longitude"
              value={location.longitude}
            ></input>
            {/* //////////////data////////////// */}
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
            <li>Friday: Closed</li>
            <span></span>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <span></span>
            <li>Sunday: 9:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>
      {/* <p>
        Your current location is: https://www.google.com/maps/?q=
        {location.latitude}, {location.longitude}
      </p> */}
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
