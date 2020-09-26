import React, { useState } from "react";
import Dropdown from "./Dropdown";
import options from "../Json/language";
import Convert from "./Convert";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label className="label">Enter the text for language</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select the language"
        options={options}
        selected={language}
        onClickSelectedOption={setLanguage}
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
