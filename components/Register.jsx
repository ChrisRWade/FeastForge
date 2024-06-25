// components/Register.js
import React, {useState} from "react";
import styles from "../styles/Login.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Register = ({setIsRegistering}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstName, lastName, email, password, phoneNumber}),
    });

    if (response.ok) {
      // Handle successful registration (e.g., redirect, show success message)
      setIsRegistering(false);
    } else {
      // Handle errors (e.g., show error message)
      console.error("Failed to register");
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleRegister}>
      <h2>Create Account</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="firstName">First Name</label>
        <div className={styles.inputWithIcon}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
          </div>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastName">Last Name</label>
        <div className={styles.inputWithIcon}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
          </div>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Your Email</label>
        <div className={styles.inputWithIcon}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
          </div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Your Password</label>
        <div className={styles.inputWithIcon}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="phoneNumber">Phone Number (Optional)</label>
        <div className={styles.inputWithIcon}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faPhone} className={styles.inputIcon} />
          </div>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className={styles.signInButton}>
        Create Account
      </button>
      <p>
        Already have an account?{" "}
        <button
          className={styles.linkButton}
          type="button"
          onClick={() => setIsRegistering(false)}
        >
          Sign In
        </button>
      </p>
    </form>
  );
};

export default Register;
