import React from 'react';
import './index.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className="styled-button">
        {props.title}
    </button>
  )
}

export default Button;