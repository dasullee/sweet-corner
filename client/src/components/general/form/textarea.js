import React from 'react';
import './form.scss';

const Textarea = ({color, input, meta, placeholder}) => {
    return (
        <div className="input-field">
            <textarea {...input} className={`brown-text ${color}`} placeholder={placeholder}></textarea>
        </div>
    );
}

export default Textarea;
