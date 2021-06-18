import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./styles/userList.css";

import { error } from "../actions/actions";
import Editor from "../components/editor";
import * as userService from "../services/users";

function UserList() {
  const [list, setList] = useState([{}]);
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();

  useEffect(
    function () {
      (async function () {
        try {
          const { data } = await userService.get();
          setList(data);
        } catch (err) {
          dispatch(error(err));
        }
      })();
    },
    [dispatch]
  );

  function handleImageShow(user) {
    const image = user.image === undefined ? { url: "../18.jpg" } : user.image;
    setImg(image);
  }

  async function deleteUser(userId) {
    try {
      await userService.remove(userId);
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function editUser(userId, body) {
    try {
      await userService.update(userId, body);
    } catch (err) {
      dispatch(error(err));
    }
  }

  return (
    <fieldset className="user-wrapper">
      <legend className="user-title">List of Users</legend>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((user, index) => {
            return (
              <tr key={index} onClick={() => handleImageShow(user)}>
                <td className="user-table__cell">{user.name}</td>
                <td className="user-table__cell">{user.email}</td>
                <td className="user-table__cell">{user.role}</td>
                <td className="user-table__cell">
                  <Editor
                    onDelete={(e) => {
                      e.stopPropagation();
                      deleteUser(user.id);
                    }}
                    onEdit={(e) => {
                      e.stopPropagation();
                      editUser(user);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="user-image-wrapper">
        {img && <img src={img.url} alt="not available now" />}
      </div>
    </fieldset>
  );
}

export default UserList;
