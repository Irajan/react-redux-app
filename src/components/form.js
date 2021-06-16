import React from "react";

function handleSubmit(e) {
  e.preventDefault();
}

function Form(props) {
  return (
    <fieldset>
      <legend>{props.title}</legend>
      <form onSubmit={handleSubmit}>{props.children}</form>
    </fieldset>
  );
}

export default Form;
