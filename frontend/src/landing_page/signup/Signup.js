import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add your login/register logic here (API call)
    // If login/signup success:
    window.location.href = "http://localhost:3001"; // Redirect to dashboard
  };

  return (
    <div style={{ width: "350px", margin: "60px auto", textAlign: "center" }}>
      <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          required
        />

        <button type="submit" className="btn btn-primary w-100">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <p style={{ marginTop: "15px", cursor: "pointer", color: "blue" }}
        onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}
      </p>
    </div>
  );
};

export default Signup;
