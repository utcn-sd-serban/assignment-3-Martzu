import React, { Component } from "react";
import user from "../model/user"
import createUserPresenter from "../presenter/createUserPresenter";
import CreateUser from "./CreateUser";

const mapModelStateToComponentState = modelState => ({
    newUser: modelState.newUser

});

export default class SmartCreateUser extends Component{
    constructor()
    {
        super();
        this.state = mapModelStateToComponentState(user.state)
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        user.addListener("change", this.listener);

    }

    componentWillUnmount() {
        user.removeListener("change", this.listener);
    }

    render(){
        return(
            <CreateUser
                onChange={createUserPresenter.changeProperties}
                onClick={createUserPresenter.onClick}

            />
        );
    }

}