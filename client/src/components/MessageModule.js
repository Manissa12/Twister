import MessageTab from "./MessageTab";
import MessageSend from "./MessageSend";

function MessageModule({ messages }) {

    return (
        <div>
            <MessageTab messages={messages}></MessageTab>
            <hr></hr>
            <MessageSend></MessageSend>
        </div>
    )
}

export default MessageModule