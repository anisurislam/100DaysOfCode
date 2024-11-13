import { useState } from "react";
import { GiStoneCrafting } from "react-icons/gi";
import Password from "./Password";
import History from "./History";
import { generatePassword } from "../generatePassword";

export default function PasswordGenerator() {
  let [mainPass, setMainPass] = useState("");
  let [passwordList, setPasswordList] = useState([]);

  return (
    <div className="password-generator">
      <div>
        <Password mainPass={mainPass} setMainPass={setMainPass} />
        <div className="generate-button-area">
          <button
            className="generate-button button-style"
            onClick={function () {
              let generatedPassword = generatePassword();
              setMainPass(generatedPassword);
              setPasswordList([generatedPassword, ...passwordList]);
            }}
          >
            Generate Password <GiStoneCrafting />
          </button>
        </div>
      </div>
      <div>
        <History passwordList={passwordList} />
      </div>
    </div>
  );
}
