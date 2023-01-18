import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  const [readSerachParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setTimeout(() => {
      setSearchParams({
        day: "today",
        tomorrow: "123",
      });
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
