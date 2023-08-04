import React, { useEffect, useState } from "react";

const Header = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = "https://reqres.in/api/users"; // API endpoint for a list of users

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data); // Store the array of users' data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on page load

  return (
    <div>
      {/* Render the fetched data or display a loading message */}
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <h2>User Data:</h2>
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            <p>Email: {user.email}</p>
            <img src={user.avatar} alt="User Avatar" />{" "}
            {/* Make sure the image URL is accessible */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Header;
