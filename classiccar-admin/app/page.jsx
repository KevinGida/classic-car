"use client";
import React from "react";
import { login } from "./utils/fetch";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    const { username, password } = event.currentTarget.elements;
    const payload = {
      username: username.value,
      password: password.value,
    };
    try {
      login(payload);
      router.push("/dashboard");
    } catch (e) {
      console.log(e.message);
      router.push("/");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username : </label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
