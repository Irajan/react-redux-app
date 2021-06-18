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
  const [message, setMessage] = useState("");

  useEffect(function () {
    getUser();
  }, []);

  function handleImageShow(user) {
    const image = user.image === undefined ? { url: "../18.jpg" } : user.image;
    setImg(image);
  }

  async function getUser() {
    try {
      const { data } = await userService.get();
      setList(data);
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function deleteUser(userId) {
    try {
      await userService.remove(userId);
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function editUser(userId, key) {
    const value = prompt(`Enter appropriate value for ${key}`);

    try {
      await userService.update(userId, { [key]: value });
      setMessage("Updated successfully");
      getUser();
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function addUser() {
    const name = prompt("Enter the name of new user");
    const email = prompt("Enter email of new user");
    const role = prompt("Enter role of new user");
    const password = "password1";

    try {
      const newUser = { name, email, password, role };
      await userService.add();
      list.push(newUser);
    } catch (err) {
      dispatch(error(err));
    }
  }

  return (
    <fieldset className="user-wrapper">
      <legend className="user-title">List of Users</legend>
      <Editor
        onAdd={(e) => {
          e.stopPropagation();
          addUser();
        }}
      />
      <div className="edit">{message}</div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {list.map((user, index) => {
            return (
              <tr key={index} onClick={() => handleImageShow(user)}>
                <td className="user-table__cell">
                  <span>{user.name}</span>
                  <Editor
                    onEdit={(e) => {
                      e.stopPropagation();
                      editUser(user.id, "name");
                    }}
                  />
                </td>
                <td className="user-table__cell">
                  <span>{user.email}</span>
                  <Editor
                    onEdit={(e) => {
                      e.stopPropagation();
                      editUser(user.id, "email");
                    }}
                  />
                </td>
                <td className="user-table__cell">
                  <span>{user.role}</span>
                  <Editor
                    onEdit={(e) => {
                      e.stopPropagation();
                      editUser(user.id, "role");
                    }}
                  />
                </td>
                <td className="user-table__cell">
                  <Editor
                    onDelete={(e) => {
                      e.stopPropagation();
                      deleteUser(user.id);
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
