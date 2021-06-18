import React from "react";

let lastId = 0;

function InputRow(props) {
  return (
    <div className="form-row">
      <label htmlFor={`input-${++lastId}`}>{props.label}</label>
      <input
        type={props.type}
        id={`input-${lastId}`}
        onChange={props.onChange}
      />
      <div className="err">{props.err}</div>
    </div>
  );
}

export default InputRow;
