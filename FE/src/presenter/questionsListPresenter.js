import question from "../model/question"
import findQuestionPresenter from "./findQuestionPresenter";

class QuestionsListPresenter {
    onCreateQuestion()
    {
        window.location.assign("#/create-question");
    }

    onChange(property, value)
    {
        question.changeSearchedQuestionProperty(property, value);

    }

    searchTag()
    {
        findQuestionPresenter.findByTag();
        window.location.assign("#/search-tag");
    }

    searchTitle()
    {
        findQuestionPresenter.find();
        window.location.assign("#/search-title");
    }

    orderedByDate()
    {
        return question.reverseArray();
    }


}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;