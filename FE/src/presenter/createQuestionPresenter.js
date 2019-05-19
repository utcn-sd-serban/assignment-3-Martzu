import question from "../model/question"
import user from "../model/user"

class CreateQuestionPresenter{

    onCreate(){

       question.addQuestion(user.state.currentUser.id, question.state.newQuestion.title, question.state.newQuestion.text, question.state.newQuestion.tags);
       question.changeNewQuestionProperty("user", "")
       question.changeNewQuestionProperty("title", "");
       question.changeNewQuestionProperty("text", "");
       question.changeNewQuestionProperty("tags","");
       debugger;
       question.loadAllQuestions();
       window.location.assign("#/home");
    }

    onChange(property, value)
    {
        question.changeNewQuestionProperty(property, value);
        //const us = user.state.currentUser;
        //question.changeNewQuestionProperty("user", user.state.currentUser);
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;