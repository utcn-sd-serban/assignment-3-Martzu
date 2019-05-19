const BASE_URL = "http://localhost:8080";

export default class RestClient
{
    constructor()
    {

    }


    setUser(username, password)
    {
        this.username = username;
        this.password = password;
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    loadAllUsers()
    {
        debugger;
        return fetch(BASE_URL + "/users", {

            method: "GET",
            /*headers: {
                "Authorization": this.authorization
            }*/
        }).then(response => {
            debugger;
            return response.json()});
    }


    createUser(id, fullname, password)
    {
        debugger;
        return fetch(BASE_URL + "/users", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                fullName: fullname,
                password: password,
                email: fullname + "@net.com"
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response => {
            debugger;
            return response.json()});
    }

    login(id, fullname, password)
    {
        debugger;
        return fetch(BASE_URL + "/login", {

            method: "POST",
            body: JSON.stringify({
                id: id,
                fullName: fullname,
                password: password,
                email: fullname + "@net.com"
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response => {
            debugger;
            return response;
        });
    }
}
