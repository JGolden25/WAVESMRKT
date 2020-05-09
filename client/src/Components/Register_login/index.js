import React from 'react';
import MyButton from '../utils/button';

const RegisterLogin = () => {
    return (
        <div classname="page_wrapper">
            <div classname="container">
                <div classname="register_login_container">
                    <div classname="left">
                        <h1>New Customers</h1>
                        <p>Lorem ipsum dolor</p>
                        <MyButton
                            type="default"
                            title="create an account"
                            linkTo="/register"
                            addStyles={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                    <div classname="right">
                            <h2>Registered customers</h2>
                            <p>if you have an account,please log in.</p>
                            LOGIN
                    </div>
                </div>
           
        </div>
        </div>
    );
};

export default RegisterLogin;

