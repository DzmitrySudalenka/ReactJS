import React from "react";
import "./Input.css";

const Input = ( props ) => {

  const inputClasses = ['input'];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('invalid');
  }

  return (
    <div className="input-wrap">
      <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
    </div>
  );

};

export default Input;
