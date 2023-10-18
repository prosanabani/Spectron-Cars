import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import axios from "axios";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the data into the database
    // const response = await axios.post("/api/cars", formData);
    try {
      await axios.post("http://localhost:8800/cars", formData);

    } catch (err) {
      console.log(err)
    }


    // // Clear the form
    // setFormData({
    //   price: "",
    //   year: "",
    //   name: "",
    //   transmission: "",
    //   type: "",
    //   reviews: "",
    //   rating: "",
    //   model: "",
    //   make: "",
    //   mileage: "",
    //   condition: "",
    //   fueltype: "",
    //   img: "",
    // });
  };

  return (
    <div>
      <div className="dashboard">
        <h1 className="title"> Dashboard</h1>
        <form onSubmit={handleSubmit} className="dsheboard_in_form">
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
            />
          </div>

          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
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

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
