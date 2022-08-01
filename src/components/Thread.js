import CommentList from "./CommentList";

export default function Thread({thread}){

    return (
        <>
                <div>{thread.id}</div>
                <div>{thread.title}</div>
                <div>{thread.description}</div>
                <CommentList comments={thread.comments}></CommentList>

        </>
    );
}