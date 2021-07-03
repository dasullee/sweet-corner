import React from 'react'

export default props => {
    const { autoComplete="off", input, label, className, type="text" } = props
    return (
        <div>
            <textarea {...input} className={className} type={type} placeholder={label} autoComplete={autoComplete} />
        </div>
    )
}