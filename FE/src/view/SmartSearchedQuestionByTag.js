import React, { Component } from "react";
import question from "../model/question"
import SearchedQuestionByTag from "./SearchedQuestionByTag";


const mapModelStateToComponentState = modelState => ({
    tagContainingQuestions: modelState.tagContainingQuestions

});

export default class SmartSearchedQuestionByTag extends Component{
    constructor(props)
    {
        super(props);
        this.state = mapModelStateToComponentState(question.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        question.addListener("change", this.listener);
        debugger;

    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render(){
        return(
            <SearchedQuestionByTag
                questions={this.state.tagContainingQuestions}
            />
        );
    }

}