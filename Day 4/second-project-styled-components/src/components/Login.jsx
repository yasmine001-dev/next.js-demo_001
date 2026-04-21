import React from "react";
import { MainButton } from "../StyledComponents/MainButton";

function Login() {
  return (
    <>
      <div className="bg-dark p-5 text-white">
        <div className="container">
          <h1 className="mb-5">PageLogin</h1>

          <label htmlFor="username" className="form-label fw-bold text-warning">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-3"
          />
          <label
            htmlFor="password"
            className="form-label  fw-bold text-warning"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />

          <MainButton>Login</MainButton>
          <MainButton variant="outline" className="ms-3">
            Sign up
          </MainButton>

          <MainButton variant="outline" className="ms-3 border border-warning">
            Forgot Password
          </MainButton>
        </div>
      </div>
    </>
  );
}

export default Login;
