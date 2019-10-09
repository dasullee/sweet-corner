import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Your Orders</h1>
            </div>
        );
    }
}

export default connect(null, {})(Orders);
