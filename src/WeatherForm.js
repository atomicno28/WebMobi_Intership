import React from "react";
import "./basic.css";

export default function WeatherForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your city.."
        onChange={handleChange}
      />
      <br />
      <button type="submit">Search</button>
    </form>
  );
}
