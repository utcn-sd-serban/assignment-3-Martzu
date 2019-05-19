import React from 'react';

const Login = ({onChange, onClickLogin, onClickCreateUser}) => (

    <div>
        <label>
            User Name:
        </label>
        <input
            onChange={e => onChange("name", e.target.value)}/>


        <label>
            Password:
        </label>

        <input
            onChange={e => onChange("password", e.target.value)}/>



        <button
            onClick={onClickLogin}> Login
        </button>

        <button
            onClick={onClickCreateUser}> Create Account

        </button>


    </div>







);
export default Login;