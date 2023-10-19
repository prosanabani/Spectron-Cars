import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "../../fontawesome";
import PopularListing2 from "./popularListing2";
import popListingData from "./pop-listing-data";
import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();

  // TODO: Submit the search form to your API
};

export default function Listing() {
  const [keyword, setKeyword] = React.useState("");
  const [condition, setCondition] = React.useState("");
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [type, setType] = React.useState("");
  const [year, setYear] = React.useState("");
  const [mileageMin, setMileageMin] = React.useState("");
  const [mileageMax, setMileageMax] = React.useState("");
  const [fuelTypes, setFuelTypes] = React.useState("");
  const [transmissions, setTransmissions] = React.useState("");
  let [cars_data, setCars_data] = useState([]);
  let [CarMake, setCarMake] = useState([]);
  let [CarType, setCarType] = useState([]);

  const getModelsForMake = cars_data.map((items) => {
    if (items.make === make) {
      return <option value={items.model}>{items.model}</option>;
    }
  });
  const CarsMakesDatabase = CarMake.map((items) => {
    return <option value={items.company}>{items.company}</option>;
  });
  const CarsTypesDatabase = CarType.map((items) => {
    return <option value={items.Cartype}>{items.Cartype}</option>;
  });

  //   let [model, setModel] = useState([]);

  useEffect(() => {
    let fetchAllCars = async () => {
      try {
        let res = await axios.get("http://localhost:8800/cars");
        console.log(res);
        setCars_data(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCars();
  }, []);
  useEffect(() => {
    let fetchAllMake = async () => {
      try {
        let res = await axios.get("http://localhost:8800/make");
        console.log(res);
        setCarMake(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMake();
  }, []);
  useEffect(() => {
    let fetchAllMake = async () => {
      try {
        let res = await axios.get("http://localhost:8800/type");
        console.log(res);
        setCarType(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMake();
  }, []);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    switch (name) {
      case "keyword":
        setKeyword(value);
        break;
      case "condition":
        setCondition(value);
        break;
      case "make":
        setMake(value);
        break;
      case "model":
        setModel(value);
        break;
      case "type":
        setType(value);
        break;
      case "year":
        setYear(value);
        break;
      case "mileageMin":
        setMileageMin(value);
        break;
      case "mileageMax":
        setMileageMax(value);
        break;
      case "fuelTypes":
        setFuelTypes(value);

        break;
      case "transmissions":
        if (checked) {
          setTransmissions(value);
        } else {
          setTransmissions("");
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className="container_of_form_popularlisting">
      <form onSubmit={handleSubmit} className="form_in_form">
        <label htmlFor="">Search Filters</label>
        <input
          name="keyword"
          type="text"
          placeholder="enter Keyword"
          onChange={handleChange}
        />
        <select
          // value={ondition}
          name="condition"
          onChange={handleChange}
        >
          <option value="">Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Certified Pre-Owned">Certified Pre-Owned</option>
          {/* <option value="Certified Pre-Owned">Certified Pre-Owned</option> */}
        </select>
        <select
          // value={make}
          name="make"
          onChange={handleChange}
        >
          <option value="">Select Make</option>
          {CarsMakesDatabase}
        </select>

        <select
          // value={model}
          name="model"
          onChange={handleChange}
        >
          <option value="">Model</option>
          {getModelsForMake}
          {/* Populate this select based on the selected make */}
        </select>

        <select
          // value={type}
          name="type"
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          {CarsTypesDatabase}
        </select>
        <select
          // value={year}
          name="year"
          onChange={handleChange}
        >
          <option selected value="">
            select year
          </option>
          {Array.from({ length: 35 }, (_, i) => 1990 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label htmlFor="">Mileage</label>
        <input
          type="number"
          // value={mileageMin}
          name="mileageMin"
          placeholder="Mileage Min"
          onChange={handleChange}
        />

        <input
          type="number"
          // value={mileageMax}
          name="mileageMax"
          placeholder="Mileage Max"
          onChange={handleChange}
        />

        <div className="fuel_container">
          <label htmlFor="">Fuel Type</label>
          <br />
          <input
            type="radio"
            name="fuelTypes"
            value="Gasoline"
            onChange={handleChange}
          />
          <label htmlFor="">Gasoline</label>
          <br />
          <input
            type="radio"
            name="fuelTypes"
            value="Hybrid"
            onChange={handleChange}
          />
          <label htmlFor=""> Hybrid </label>
          <br />

          <input
            type="radio"
            name="fuelTypes"
            value="Electric"
            onChange={handleChange}
          />

          <label htmlFor="">Electric</label>
          <br />

          <input
            type="radio"
            name="fuelTypes"
            value="Diesel"
            onChange={handleChange}
          />

          <label htmlFor="">Diesel</label>
          <br />
        </div>
        <label htmlFor="">Transmission</label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="transmissions"
            value="Automatic"
            onChange={handleChange}
          />
          Automatic
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="transmissions"
            value="Manual"
            onChange={handleChange}
          />
          Manual
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="transmissions"
            value="CVT"
            onChange={handleChange}
          />
          CVT
        </label>

        <button type="submit" className="search">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Search
        </button>
      </form>
      <PopularListing2
        keyword={keyword}
        condition={condition}
        make={make}
        model={model}
        type={type}
        year={year}
        mileageMin={mileageMin}
        mileageMax={mileageMax}
        fuelTypes={fuelTypes}
        transmissions={transmissions}
      />
    </div>
  );
}
