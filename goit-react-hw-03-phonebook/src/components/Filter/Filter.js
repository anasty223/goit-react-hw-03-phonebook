import React, { Component } from "react";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name{" "}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
