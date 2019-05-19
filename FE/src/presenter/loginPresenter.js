import user from "../model/user"

class LoginPresenter {


    changeProperties(property, value)
    {
        user.changeLoginUser(property, value);
        user.loadClient();
    }

    onInit()
    {
        user.loadUsers();
    }

    verifyUser()
    {
        user.verifyUser();

        //check if user logged successfully

    }

    createAccount()
    {
        window.location.assign("#/create-user");
    }


}

const loginPresenter = new LoginPresenter();

export default loginPresenter;