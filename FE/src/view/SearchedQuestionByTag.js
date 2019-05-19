import React from 'react';

const SearchedQuestionByTag = ({questions}) => (

    <div className={"columns"}>

        <div className={"column"}>
        </div>
        <div className={"column"}>
            {
                questions.map((question, index) => (
                    <article className="message">
                        <div className="message-header">
                            <p>{question.title}</p>
                            <p>Created by {question.user}
                                <p> {question.date}</p>
                            </p>
                        </div>
                        <div className="message-body">
                            {question.text}
                            <br/>


                        </div>
                        <span className="tag is-dark">{question.tags}</span>
                    </article>

                ))

            }
        </div>
        <div className={"column"}>
        </div>
    </div>




);

export default SearchedQuestionByTag;