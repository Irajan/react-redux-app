import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./styles/userProfile.css";

import { error } from "../actions/actions";
import * as userService from "../services/users";

function UserProfile(props) {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(function () {
    (async function () {
      try {
        const { data } = await userService.get(props.id);
        setUser(data);
      } catch (err) {
        dispatch(error(err));
      }
    })();
  }, []);

  return (
    <fieldset className="info-container">
      <legend>General Information</legend>
      <div className="info-wrapper">
        <div className="info-row">
          <span className="info-row__label">Name:</span>
          <span className="info-row__value">{user.name}</span>
        </div>
        <div className="info-row">
          <span className="info-row__label">Email:</span>
          <span className="info-row__value">{user.email}</span>
        </div>
        <div className="info-row">
          <span className="info-row__label">Role:</span>
          <span className="info-row__value">{user.role}</span>
        </div>
      </div>
      <div className="info-img-wrapper">
        <img src={user.image?.url} alt={`${user.name}`} />
      </div>
    </fieldset>
  );
}

export default UserProfile;
