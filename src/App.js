import React, { useState } from "react";

import Accordion from "./components/accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "what is react?",
    content: "React is a javacsript framework",
  },
  {
    title: "Why react is so populer?",
    content: "Engineers love it",
  },
  {
    title: "Who is loving it?",
    content: "Me loving it",
  },
];

const options = [
  {
    label: "This is red",
    value: "red",
  },
  {
    label: "It is sky blue",
    value: "blue",
  },
  {
    label: "This is black",
    value: "black",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  // return <Accordion  items={items}/>;
  // return <Search />;
  return (
    <div>
      <button
        onClick={() => {
          console.log("clickinghere");
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle dropdown!!!!!
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onClickSelectedOption={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
