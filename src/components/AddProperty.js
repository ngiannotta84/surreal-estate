import React, { useState } from "react";
import sendData from "../request/request";
import "../styles/add-property.css";

const AddProperty = () => {
  const intialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Detached",
      bedrooms: 1,
      bathrooms: 1,
      price: 0,
      email: "",
    },
  };
  const [fields, setFields] = useState(intialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    sendData(fields);
    // eslint-disable-next-line no-console
    console.log(fields);
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }; /* [e.target.name] is basically a key */
  return (
    <div className="add-property">
      <h2>Add Property Page</h2>
      <form onSubmit={handleAddProperty}>
        <div className="form-field">
          <label htmlFor="title">
            <span>Title</span>
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="city">
            <span>City</span>
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="London">London</option>
              <option value="York">York</option>
              <option value="NewCastle">NewCastle</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="type">
            <span>House Type</span>
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bedrooms">
            <span>Bedrooms</span>
            <input
              id="bedrooms"
              name="bedrooms"
              placeholder="Bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bathrooms">
            <span>Bathrooms</span>
            <input
              id="bathrooms"
              name="bathrooms"
              placeholder="Bathrooms"
              type="number"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="price">
            <span>Price</span>
            <input
              id="price"
              name="price"
              placeholder="Price Range"
              type="number"
              min="0"
              step="500"
              value={fields.price}
              onChange={handleFieldChange}
            />
            <span>£</span>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <span>email</span>
            <input
              id="email"
              name="email"
              placeholder="example@outlook.com"
              type="text"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
