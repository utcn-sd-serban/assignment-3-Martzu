import { EventEmitter} from "events";
import user from "../model/user";
import RestQuestion from "../rest/RestQuestion";

//const quest = new RestQuestion(user.state.currentUser.name, user.state.currentUser.password);
//const quest = new RestQuestion("AB", "AB");

class Question extends EventEmitter
{

    constructor()
    {
        super();
        this.quest = new RestQuestion();
        this.state =
            {
                questions:
                [
                    {
                        id: 1,
                        user: "John",
                        title: "SD problem",
                        text: "Webstorm doesn't compile",
                        tags: "sd, javascript",
                        date: "Sun Apr 13 2019"

                    }

                ],

                //update it with the number of questions from the database
                id: 2,

                newQuestion: {
                    user: "",
                    title: "",
                    text: "",
                    tags: "",
                    date: ""
                },


                tagContainingQuestions: [],

                searchedQuestion: {},

                toSearch: ""

            };


    }


    setLoginUser()
    {

        this.quest.loginUser(user.state.currentUser.name, user.state.currentUser.password);
        this.quest.auth();

    }

    loadAllQuestions()
    {
        debugger;
        this.quest.loadAllQuestions().then(questions => {
            this.state = {...this.state, questions : questions};
            debugger;
            this.state.id = this.state.questions.length;
            this.emit("change", this.state);
            debugger;
        });
    }

    addQuestion(userId, title, text, tags)
    {
        debugger;
        return this.quest.createQuestion(this.state.id++, userId, title, text, tags)
            .then(quest => {

                debugger;
                this.state = {
                    ...this.state,
                    questions: this.state.questions.concat([quest])
                };
                this.emit("change", this.state);
                debugger
            });
    }

    /*
    * return client.createUser(this.state.id++, name, password)
            .then(user => {
                this.state = {
                    ...this.state,
                    users: this.state.users.concat([user])
                };
                this.emit("change", this.state);
                debugger
            });
    *
    * */


    searchQuestionsTag()
    {
        const tagContainingQuestions = this.state.questions.filter((quest) => quest.tags.indexOf(this.state.toSearch) !== -1);
        this.state =
            {
                ...this.state,
                tagContainingQuestions:
                tagContainingQuestions
            };

        this.emit("change", this.state);
    }

    searchQuestion()
    {

            debugger;
            const searchedQuestion = this.state.questions.find((quest) => quest.title === this.state.toSearch);
            this.state =
                {
                    ...this.state,
                    searchedQuestion: searchedQuestion
                };
            this.emit("change", this.state);
            debugger;


    }

    changeSearchedQuestionProperty(property, value)
    {
        this.state = {
            ...this.state,
            [property] : value
        }
    }


    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    reverseArray() {
        let newArray = [];
        for (let i = this.state.questions.length - 1; i >= 0; i--) {
            newArray.push(this.state.questions[i]);
        }
        return newArray;
    }
}

const question = new Question();

export default question;