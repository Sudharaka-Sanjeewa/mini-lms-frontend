import React, { useEffect, useState } from "react";
import API from "../api/axios";

const HomePage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/users");
        setMessage("Welcome! You are authenticated.");
      } catch (err) {
        setMessage("You must log in first.");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default HomePage;