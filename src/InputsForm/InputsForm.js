import React, { useState } from "react";
import "./InputsForm.css";

export function InputsForm() {
  const [userData, setUserData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = () => {
    alert(JSON.stringify(userData, null, 2));
    setUserData({
      firstName: "",
      phoneNumber: "",
      email: "",
    });
  };

  const updateUserData = (e) => {
    const {
      target: { value, name },
    } = e;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="inputsForm">
      <h1>Замовити консультацію</h1>
      <input
        className="inputField"
        value={userData.firstName}
        onChange={updateUserData}
        type="text"
        name="firstName"
        placeholder="enter your first name"
      ></input>
      <br />
      <br />
      <input
        className="inputField"
        value={userData.phoneNumber}
        onChange={updateUserData}
        type="phone"
        name="phoneNumber"
        placeholder="enter your phone number"
      ></input>
      <br />
      <br />
      <input
        className="inputField"
        value={userData.email}
        onChange={updateUserData}
        type="email"
        name="email"
        placeholder="enter your email"
      ></input>
      <br />
      <br />
      <button className="inputBtn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
export default InputsForm;
