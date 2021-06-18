import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { END_POINT } from "../constants";
import Profile from "./profile";
import Editor from "./editor";

function UserList() {
  const [list, setList] = useState([{}]);
  const [selected, setSelected] = useState();

  const token = useSelector((state) => state.logged.accessToken);
  const headers = { Authorization: `Barer ${token}` };

  // useEffect(function () {
  //   const url = `${END_POINT}/api/users`;
  //   (async function () {
  //     try {
  //       const { data } = await axios.get(url, { headers });
  //       setList(data);
  //     } catch (err) {
  //       console.log(err.response);
  //     }
  //   })();
  // });

  // async function deleteHandler(id) {
  //   const url = `${END_POINT}/api/users/${id}`;
  //   (async function () {
  //     try {
  //       await axios.delete(url, { headers });
  //     } catch (err) {
  //       console.log(err.response);
  //     }
  //   })();
  // }

  console.log();

  return (
    <>
      {list.map((user) => (
        <div key={user.id} king={user.id}>
          Name
        </div>
      ))}
    </>
  );
}

export default UserList;
