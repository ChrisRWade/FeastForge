// components/Login.js
import React, {useState} from "react";
import {useUser} from "../context/UserContext"; // Adjust the path according to your structure
import styles from "../styles/Login.module.css"; // Assuming CSS module usage

const Login = () => {
  const {login} = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    console.log("Login clicked");
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <h2>Sign In</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.options}>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember Me?
        </label>
        <a href="#" className={styles.linkButton}>
          Forgot password?
        </a>
      </div>
      <button type="submit" className={styles.signInButton}>
        Sign In
      </button>
      <p>
        Not Registered?{" "}
        <button
          className={styles.linkButton}
          onClick={() => console.log("Create account clicked")}
        >
          Create account
        </button>
      </p>
    </form>
  );
};

export default Login;
