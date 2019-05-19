const BASE_URL = "http://localhost:8080";

export default class RestQuestion
{

    loginUser(username, password)
    {
        this.username = username;
        this.password = password;
    }

    auth()
    {
        this.authorization = "Basic " + btoa(this.username + ":" + this.password);
    }

    loadAllQuestions()
    {
        debugger;
        return fetch(BASE_URL + "/questions", {

            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            debugger;
            return response.json()});
    }


    createQuestion(id, userId, title, text, tags)
    {
        debugger;
        return fetch(BASE_URL + "/questions", {

            method: "POST",
            body: JSON.stringify({
                id: id,
                user: userId,
                title: title,
                text: text,
                tags: tags,
                date: new Date().getTime()
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response =>{
            debugger;
            return response.json()
        });
    }
}