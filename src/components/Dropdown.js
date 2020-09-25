import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onClickSelectedOption }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
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
    <div ref={ref} className="ui container">
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
      <div style={{height:50, width: 50, background: `${selected.value}`}}>{selected.value}</div>
      </div>
    </div>
  );
};

export default Dropdown;
