import React, { Component } from "react";
import question from "../model/question"
import QuestionsList from "./QuestionsList";
import questionsListPresenter from "../presenter/questionsListPresenter";

const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions,

});

export default class SmartQuestionsList extends Component{
    constructor()
    {
        super();
        this.state = mapModelStateToComponentState(question.state)
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        question.addListener("change", this.listener);
        question.setLoginUser();
        question.loadAllQuestions();

    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render(){
        return(
            <QuestionsList
                questions={this.state.questions}
                onCreateQuestion={questionsListPresenter.onCreateQuestion}
                searchTitle={questionsListPresenter.searchTitle}
                searchTag={questionsListPresenter.searchTag}
                onChange={questionsListPresenter.onChange}
               />
        );
    }

}