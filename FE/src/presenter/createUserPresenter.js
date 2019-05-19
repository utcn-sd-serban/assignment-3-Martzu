import user from "../model/user"

class CreateUserPresenter {

    changeProperties(property, value)
    {
        user.changeNewUser(property,value);
    }

    onClick()
    {
        debugger;
        user.addUser(user.state.newUser.name, user.state.newUser.password);
        window.location.assign("#/");
    }

}

const createUserPresenter = new CreateUserPresenter();

export default createUserPresenter;