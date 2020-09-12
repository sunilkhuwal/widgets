import React from "react";
import Accordion from "./components/accordion";

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

const App = () => {
  return <Accordion  items={items}/>;
};

export default App;
