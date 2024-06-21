// /context/UserContext.js
import React, {createContext, useContext, useEffect, useState} from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user);
    // Check the current user session on startup
    fetch("/api/users/session", {
      method: "GET",
      credentials: "include", // Ensures cookies are included in the request
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          console.log("User session found:", data);
          setUser(data); // Set the user state if session is still active
        } else {
          console.log("No user session found");
        }
      })
      .catch((error) => {
        console.error("Failed to retrieve user session:", error);
      });
  }, []);

  const login = (email, password) => {
    // API call to login the user
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setUser(data); // Assuming the user object is returned upon successful login
        } else {
          throw new Error("Failed to log in");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed");
      });
  };

  const logout = () => {
    // API call to logout the user
    fetch("/api/users/logout")
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
