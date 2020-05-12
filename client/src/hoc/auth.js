import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/user_actions';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function(ComposedClass, reload, adminRoute = null){
    class AuthenticationCheck extends Component {
        render() {
            return (
                <div>
                    
                </div>
            );
        }
    }
    
    export default AuthenticationCheck;
}
