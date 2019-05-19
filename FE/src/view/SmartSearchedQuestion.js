import React, { Component } from "react";
import question from "../model/question"
import SearchedQuestion from "./SearchedQuestion";


const mapModelStateToComponentState = modelState => ({
    searchedQuestion: modelState.searchedQuestion

});

export default class SmartSearchedQuestion extends Component{
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
            <SearchedQuestion
                searchedQuestion={this.state.searchedQuestion}
            />
        );
    }

}