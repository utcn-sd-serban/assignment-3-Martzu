import React from 'react';
import 'bulma/css/bulma.css';




const QuestionsList = ({ questions, onCreateQuestion, searchTitle, searchTag, onChange }) => (

            <div className={"column"}>
                    <section className="hero is-fullheight is-dark is-bold">
                            <div className="hero-body">
                                    <div className="container">
                                            <h1 className="title">
                                                    Numberless questions
                                            </h1>
                                            <h2 className="subtitle">
                                                    Reveal any mistery...scroll into the abyss
                                            </h2>
                                    </div>
                            </div>
                    </section>
                    <section className="hero is-light is-bold">
                            <div className={"columns"}>
                                    <div className={"column"}>
                                    </div>
                                    <div className={"column"}>
                                            <div className={"notification"}>
                                                    <label> Search question by title or tag </label>
                                                    <input  className={"input"} onChange={e => onChange("toSearch", e.target.value)} />
                                                    <div className={"columns"}>
                                                            <div className={"column"}>
                                                                    <button className={"button is-dark"} onClick={searchTitle}>Search by title</button>
                                                            </div>
                                                            <div className={"column"}>
                                                                    <button className={"button is-dark"} onClick={searchTag}>Search by tag</button>
                                                            </div>

                                                    </div>


                                            </div>
                                            <button className={"button is-dark"} onClick={onCreateQuestion}>Add new question</button>
                                    </div>
                                    <div className={"column"}>
                                    </div>

                            </div>
                            <br/>
                            <br/>

                            {
                                    questions.map((question, index) => (
                                        <div className={"columns"}>
                                                <div className={"column"}>
                                                </div>

                                                <div className={"column"}>
                                                        <article className="message">
                                                                <div className="message-header">
                                                                        <p>{question.title}</p>
                                                                </div>
                                                                <div className="message-body">
                                                                        {question.text}
                                                                </div>

                                                        </article>
                                                        <span className="tag is-dark">{question.tags}</span>
                                                </div>

                                                <div className={"column"}>
                                                </div>

                                        </div>



                                    ))
                            }
                    </section>
            </div>





);

export default QuestionsList;