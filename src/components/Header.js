import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui segment">
      <Link href="/" className="ui header ">
        Accordian
      </Link>
      <Link href="/list" className="ui header ">
        List
      </Link>
      <Link href="/dropdown" className="ui header ">
        Dropdown
      </Link>
      <Link href="/translate" className="ui header ">
        Translate
      </Link>
    </div>
  );
};

export default Header;
