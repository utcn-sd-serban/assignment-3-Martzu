import { EventEmitter} from "events";

class Tag extends EventEmitter
{
    constructor()
    {
        super();
        this.tags =
            {
                question: "SD problem",
                text: "java"
            };
    }

    addTag(question, text)
    {
        this.state =
            {
                ...this.state,
                tags: this.state.tag.concat([{
                    question: question,
                    text: text
                }])
            };
        this.emit("change", this.state);
    }

}