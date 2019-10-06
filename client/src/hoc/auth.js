import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent, to = '/account/sign-in', requireAuth = true) => {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { history, auth } = this.props;

            if(auth !== requireAuth){
                history.push(to);
            }
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(mapStateToProps)(Auth);
}

function mapStateToProps({user}) {
    return {...user};
}
