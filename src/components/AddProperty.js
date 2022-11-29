import React, { useState } from "react";
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
    // eslint-disable-next-line no-console
    console.log(fields);
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-property">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <div className="form-field">
          <label htmlFor="title">
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
            City
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
            House type
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
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              placeholder="Bedrooms"
              type="number"
              min="1"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              placeholder="Bathrooms"
              type="number"
              min="1"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="price">
            Price
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
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            email
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
