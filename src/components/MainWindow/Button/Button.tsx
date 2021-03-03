import * as React from 'react';
import './Button.css'

const Button = ({text, onClick}) =>
        <button onClick={onClick} className='actions-button'>
            {text}
        </button>

export default Button
