import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function Password({ mainPass }) {
  let [copyButtonText, setCopyButtonText] = useState("Copy");
  return (
    <div className="password">
      <div className="password-field button-style">
        <p className="password-text">{mainPass}</p>
      </div>
      <button
        className={`copy-button button-style ${!mainPass ? "disabled" : ""}`}
        onClick={function () {
          if (mainPass) {
            navigator.clipboard.writeText(mainPass);
            setCopyButtonText("Copied");
            setTimeout(() => setCopyButtonText("Copy"), 1000);
          }
        }}
      >
        {copyButtonText} <IoCopyOutline />
      </button>
    </div>
  );
}
