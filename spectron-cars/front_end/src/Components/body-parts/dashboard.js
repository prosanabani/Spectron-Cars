import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    year: 0,
    transmission: "",
    type: "",
    reviews: 0,
    rating: 0,
    model: "",
    make: "",
    mileage: 0,
    condition: "",
    fueltype: "",
    img: "",
  });
  // const [file, setfile] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handelfile = (e) => {
  //   setfile(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        formData.name !== "" &&
        formData.condition !== "" &&
        formData.fueltype !== "" &&
        formData.img !== "" &&
        formData.make !== "" &&
        formData.mileage !== 0 &&
        formData.model !== "" &&
        formData.price !== 0 &&
        formData.rating !== 0 &&
        formData.reviews !== 0 &&
        formData.transmission !== "" &&
        formData.type !== "" &&
        formData.year <= 2025
      ) {
        await axios.post("http://localhost:8800/cars", formData);
        toast.success("Car imported Sucessfully");
        // Clear the form
        setFormData({
          price: "",
          year: "",
          name: "",
          transmission: "",
          type: "",
          reviews: "",
          rating: "",
          model: "",
          make: "",
          mileage: "",
          condition: "",
          fueltype: "",
          img: "",
        });
      } else {
        toast.error("Make Sure that you entered the write inputs");
      }
    } catch (err) {
      toast.error("failed to import Car");
    }
  };
  let actualPrice = formData.price;
  let year_made = formData.year;
  let mileage = formData.mileage;
  let currentYear = new Date().getFullYear();
  let carAge = currentYear - year_made;
  //calculating the discount
  let discount = carAge * 0.01 + ((mileage - 50000) / 190000) * 0.025;
  let DiscountAmount = actualPrice * discount;
  //calculating the prce after discount
  let PriceAfterDiscount = actualPrice - DiscountAmount;
  let FinalPrice = Math.ceil(PriceAfterDiscount / 10) * 10; //rounding to the last digit

  function handelYes() {
    setFormData({ ...formData, price: FinalPrice });
  }
  function handelNo() {
    setFormData({ ...formData });
  }

  return (
    <div>
      <div className="dashboard">
        <h1 className="title"> Dashboard</h1>
        <form onSubmit={handleSubmit} className="dsheboard_in_form">
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Year</label>
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">transmission</label>
            <input
              type="text"
              name="transmission"
              placeholder="Transmission"
              value={formData.transmission}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Type</label>
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Reviwes</label>
            <input
              type="number"
              name="reviews"
              placeholder="Reviews"
              value={formData.reviews}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Model</label>
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Make</label>
            <input
              type="text"
              name="make"
              placeholder="Make"
              value={formData.make}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">mileage</label>
            <input
              type="number"
              name="mileage"
              placeholder="Mileage"
              value={formData.mileage}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Condition</label>
            <input
              type="text"
              name="condition"
              placeholder="Condition"
              value={formData.condition}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Fueltype</label>
            <input
              type="text"
              name="fueltype"
              placeholder="fueltype"
              value={formData.fueltype}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="">Img</label>
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>this is the price before discount {formData.price}</p>
            <p>this is the price after discount {FinalPrice}</p>
            <div className="mini_btn_container">
              <button className="yes" type="button" onClick={handelYes}>
                Yes
              </button>
              <button className="no" type="button" onClick={handelNo}>
                no
              </button>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
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
