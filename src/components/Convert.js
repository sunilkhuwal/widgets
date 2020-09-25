import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [display, setDisplay] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setDisplay(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [language, debouncedText]);
  return (
    <div className="ui text">
      <div className="h1">{display}</div>
    </div>
  );
};

export default Convert;
