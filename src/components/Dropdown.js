import React, { useEffect, useState } from "react";

const Dropdown = ({ options, selected, onClickSelectedOption }) => {
const [open, setOpen] = useState(false);

useEffect(() => {
  document.body.addEventListener('click', () => {
    console.log('ItemClicked');
    setOpen(false);
  })
}, []);


const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        onClick={() => onClickSelectedOption(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui container">
      <div
        className="ui form"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
