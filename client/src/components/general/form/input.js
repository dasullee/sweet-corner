import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Input = ({autoComplete, color, input, meta, placeholder, type }) => {
    return (
        <div className={`input-field`}>
            <input {...input} autoComplete={autoComplete} className={`brown-text ${color}`}  placeholder={placeholder} type={type}/>
            <div className="red-text">{meta.touched && meta.error}</div>
        </div>
    );
}

Input.propTypes = {
    autoComplete: PropTypes.string,
    color: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string
};

Input.defaultProps = {
    autoComplete: 'off',
    color: 'red',
    type: 'text'
}

export default Input;
