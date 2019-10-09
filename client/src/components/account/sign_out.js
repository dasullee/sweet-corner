import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { accountSignOut } from '../../actions';

class SignOut extends Component {
    componentDidMount(){
        this.props.accountSignOut();
    }

    render(){
        const { auth } = this.props;

        return (
            <div className="center">
                <h1>Thanks For Visiting</h1>
                <h2>Come Back Soon</h2>
                {
                    auth
                        ? <p>Signing out...</p>
                        : <div>
                            <p>You have been successfully signed out</p>
                            <p><Link to="/">Back to Home Page</Link></p>
                        </div>
                }
            </div>
        );
    }
}

function mapStateToProps({user}){
    return {auth: user.auth}
}

export default connect(mapStateToProps, { accountSignOut })(SignOut);
