import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { END_POINT } from "../constants";

function Profile(props) {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.logged.accessToken);

  useEffect(
    function () {
      const headers = { Authorization: `Barer ${token}` };
      const url = `${END_POINT}/api/users/${props.id}`;

      (async function () {
        try {
          const { data } = await axios.get(url, { headers });
          setUser(data);
        } catch (err) {
          alert(err.response.data);
        }
      })();
    },
    [token, props]
  );

  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.role}</h3>
    </>
  );
}

export default Profile;
