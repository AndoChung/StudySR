import { React, useState } from "react";
import axios from "axios";

const LoginPage = () => {
  return (
    <div>
      <div>
        <form>
          <label>First Name:</label>
          <input />
          <label>Last Name:</label>
          <input />
          <label>email:</label>
          <input />
          <label>Username:</label>
          <input />
          <label>Password:</label>
          <input />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
