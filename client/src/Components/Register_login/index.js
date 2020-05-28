import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>New customers register here to become a part of the Waves Marketplace family.</p>
                        <MyButton
                            type="default"
                            title="create an account"
                            linkTo="/register"
                            addStyles={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                            <h2>Registered customers</h2>
                            <p>if you have an account,please log in.</p>
                            <Login/>
                    </div>
                </div>
           
        </div>
        </div>
    );
};

export default RegisterLogin;

