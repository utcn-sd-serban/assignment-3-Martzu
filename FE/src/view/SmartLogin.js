import React, { Component } from "react";
import user from "../model/user"
import Login from "./Login";
import loginPresenter from "../presenter/loginPresenter";

const mapModelStateToComponentState = modelState => ({
    currentUser: modelState.currentUser

});

export default class SmartLogin extends Component{
    constructor()
    {
        super();
        this.state = mapModelStateToComponentState(user.state)
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        user.addListener("change", this.listener);
        loginPresenter.onInit();

    }

    componentWillUnmount() {
        user.removeListener("change", this.listener);
    }

    render(){
        return(
            <Login
                onChange={loginPresenter.changeProperties}
                onClickLogin={loginPresenter.verifyUser}
                onClickCreateUser={loginPresenter.createAccount}
            />
        );
    }

}