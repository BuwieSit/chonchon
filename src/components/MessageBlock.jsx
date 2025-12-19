import Title from "../util/title"
import Message from "../util/message"

export default function MessageBlock({ title, message }) {
    return(
        <>
            <div className={`bg-white absolute top-2/12 p-5 rounded-3xl shadow-inner shadow-red-300`}>
                <Title text={title}/>
                <Message text={message}/>
            </div>
        </>
    )
}