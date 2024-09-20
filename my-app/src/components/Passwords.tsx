"use client";

import React, { useState, useLayoutEffect } from "react";

const generatePassword = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const Password = () => {
  const [password, setPassword] = useState<string>("");

  useLayoutEffect(() => {

    const generatedPassword = generatePassword();
    setPassword(generatedPassword);
  }, []);

  return (
    <div>
      <h1>Your Password</h1>
      <input type="text" disabled value={password} readOnly />
    </div>
  );
};

export default Password;
