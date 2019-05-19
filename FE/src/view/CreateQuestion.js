import React from 'react';

const CreateQuestion = ({ title, text, tags, onCreate, onChange}) => (

    <section className="hero is-fullheight is-light is-bold">
        <div className={"column"}>

            <label>Question title: </label>
            <input className={"input"} value = {title}
                   onChange={e => onChange("title", e.target.value)}/>

            <br/>
            <label>Describe your problem: </label>
            <input className={"input"} value = {text}
                   onChange={e => onChange("text", e.target.value)}/>
            <br/>

            <label>Add tags: </label>
            <input className={"input"} value={tags}
                   onChange={e => onChange("tags", e.target.value)}/>
            <br/>

            <button onClick={onCreate}>Create! </button>


        </div>
    </section>







);

export default CreateQuestion;