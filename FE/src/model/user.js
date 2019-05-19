import { EventEmitter} from "events";
import RestClient from "../rest/RestClient";


//client used to log
class User extends EventEmitter
{

    constructor()
    {
        super();
        this.client = new RestClient();
        this.state =
            {
                users:
                    [
                        {
                            id: 1,
                            name: "John",
                            password: "test"

                        },

                        {
                            id: 2,
                            name: "Alex",
                            password: "salam"
                        }

                    ],

                id: 3,

                newUser: {
                    name: "",
                    password: ""
                },

                //use successful to check if user has successfully logged in
                successful: "",

                //use currentUser to both verify if logged in and to post answers, questions, etc...
                currentUser: {}


            };


    }


    loadClient()
    {
        debugger;
        this.client.setUser(this.state.currentUser.name, this.state.currentUser.password);
        debugger;
    }

    loadUsers()
    {
        debugger;
        this.client.loadAllUsers().then(users => {
            debugger;
            //this.state = {...this.state, users : users, id : users.length + 1};
            this.state.users = users;
            this.state.id = users.length + 1;
            debugger;
            //this.state.id = this.state.users.length + 1;
            this.emit("change", this.state);
            debugger;
        })


    }

    addUser(name, password)
    {
        return this.client.createUser(this.state.users.length, name, password)
            .then(user => {
                debugger;
                this.state = {
                    ...this.state,
                    users: this.state.users.concat([user])
                };
                this.emit("change", this.state);
            });

    }

    changeNewUser(property, value)
    {
        this.state = {
            ...this.state,
            newUser:{
                ...this.state.newUser, [property] : value
            }
        };
        this.emit("change", this.state);

    }

    changeLoginUser(property, value)
    {
        debugger;
        //get credentials of the user that logs in
        this.state = {
            ...this.state,
            currentUser:{
                ...this.state.currentUser, [property] : value
            }
        };
        debugger;
        this.emit("change", this.state);
    }


    verifyUser()
    {
        debugger;
        const id = this.state.users.find(user => user.fullName === this.state.currentUser.name).id;
        debugger;
        if(id === 'undefined')
        {
            window.location.assign("#/");
        }
        else
        {
            this.state.currentUser.id = id;
            this.client.login(id, this.state.currentUser.name, this.state.currentUser.password).then(response=>{

                if (response.status === 200)
                {
                    window.location.assign("#/home");
                }
                else
                {
                    window.location.assign("#/");
                }
            });
        }



    }

}

const user = new User();

export default user;