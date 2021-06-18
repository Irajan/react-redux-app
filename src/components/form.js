import React from "react";

import "./styles/styles.form.css";

function handleSubmit(e) {
  e.preventDefault();
}

function Form(props) {
  return (
    <fieldset className="form-wrapper">
      <legend>{props.title}</legend>
      <form onSubmit={handleSubmit}>{props.children}</form>
    </fieldset>
  );
}

export default Form;
