export default function Thread({thread}){
    return (
        <>
                <div>{thread.id}</div>
                <div>{thread.title}</div>
                <div>{thread.description}</div>
                {/*<CommentList ></CommentList>*/}
                {thread.comments.map(comment => (<>
                    <div>{comment.body}</div>
                </>))}
        </>
    );
}