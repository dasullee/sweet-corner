import React from 'react';
import PropTypes from 'prop-types';

const Money = ({children}) => {
    const dollars = (children / 100).toFixed(2);

    return <span className="money">${dollars}</span>;
}

Money.propTypes = {
    children: PropTypes.number.isRequired
}

export default Money;
