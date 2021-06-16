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

  useEffect(function () {
    const url = `${END_POINT}/api/users`;
    (async function () {
      try {
        const { data } = await axios.get(url, { headers });
        setList(data);
      } catch (err) {
        console.log(err.response);
      }
    })();
  });

  async function deleteHandler(id) {
    const url = `${END_POINT}/api/users/${id}`;
    (async function () {
      try {
        await axios.delete(url, { headers });
      } catch (err) {
        console.log(err.response);
      }
    })();
  }

  return (
    <>
      {selected === undefined ? "" : <Profile id={selected} />}
      <table>
        <thead>
          <tr>
            <tr>Name</tr>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Editor
                  onView={() => setSelected(user.id)}
                  onDelete={() => deleteHandler(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
