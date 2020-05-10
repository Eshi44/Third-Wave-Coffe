import React from "react";
import PropTypes from "prop-types";

const Input = ({id, type, name, value, label, handleChange}) => {

    
	return (
		
			<div className="form-group">
				<label id="userAndPassword" htmlFor={name}>{label}</label>
				<input
					className="form-control"
                    id={id}
                    type={type}
					aria-describedby="emailHelp"
					placeholder="Enter username"
					name={name}
					value={value}
					onChange={handleChange}
				/>
			</div>
		
	);
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Input;
