import React from "react";
import form from "../style/form.module.css";

const Form = () => {
  return (
    <div className={form.form}>
      <form action="/send-data-here" method="post" className={form.form_inner}>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="email" name="email" placeholder="Email" />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <input type="text" id="message" name="message" placeholder="Message" />
        <button type="submit" className={form.button}>
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
