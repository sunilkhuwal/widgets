import React, { useState } from "react";

import Accordion from "./components/accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './components/Header';

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
  {
    label: "This is Pink",
    value: "pink",
  },
  {
    label: "This is Brown",
    value: "brown",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onClickSelectedOption={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );

  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  // // return <Accordion  items={items}/>;
  // // return <Search />;
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         console.log("clickinghere");
  //         setShowDropdown(!showDropdown);
  //       }}
  //     >
  //       Toggle dropdown!!!!!
  //     </button>
  //     {showDropdown ? (
  //       <Dropdown
  //         selected={selected}
  //         onClickSelectedOption={setSelected}
  //         options={options}
  //       />
  //     ) : null}
  //   </div>
  // );
};

export default App;
