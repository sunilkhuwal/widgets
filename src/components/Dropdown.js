import React from "react";

const Dropdown = ({ options, selected, onClickSelectedOption }) => {
  const renderedOptions = options.map((option) => {
    if (option === selected) return "";
    return (
      <div
        onClick={() => onClickSelectedOption(option)}
        key={option.value}
        className="item"
      >
        {option.value}
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div className="ui selection dropdown visible active">
            <i className="dropdown icon"></i>
            <div className="text">{selected.value}</div>
            <div className="menu visible transition">{renderedOptions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
