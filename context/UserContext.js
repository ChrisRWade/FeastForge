// /context/UserContext.js
import React, {createContext, useContext, useState} from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // API call to login the user
    fetch("/api/login", {
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
    fetch("/api/logout")
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
