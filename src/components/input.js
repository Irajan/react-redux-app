import React from 'react';

let lastId = 0;

function InputRow(props) {
	return (
		<>
			<label htmlFor={`input-${++lastId}`}>{props.label}</label>
			<input
				type={props.type}
				id={`input-${lastId}`}
				onChange={props.onChange}
			/>
		</>
	);
}

export default InputRow;
