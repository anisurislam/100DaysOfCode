// import { useState } from "react";
import Password from "./Password";
export default function PasswordList({ passwordList }) {
  let newPassList = passwordList.filter((el) =>
    passwordList.length > 1 ? passwordList[0] !== el : null
  );

  return (
    <>
      {newPassList.map((el) => (
        <Password key={Math.random() * 100} mainPass={el} />
      ))}
    </>
  );
}
