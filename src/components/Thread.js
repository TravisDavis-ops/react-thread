import CommentList from "./CommentList";
import {Button} from "react-bootstrap";
import {useState} from "react";
import PostComment from "./PostComment";
import {useSelector} from "react-redux";

export default function Thread({thread}){
    let owner = useSelector(state=> {
        return state.userList.find(u => u.id = thread.owner);
    })
    return (
        <>
                <div>{thread.id}</div>
                <div>{thread.title}</div>
                <div>{thread.description}</div>
                <div>{owner.username}</div>
                <div>{thread.dateCreated.toDateString()}</div>
                <PostComment threadId={thread.id}></PostComment>
                <CommentList comments={thread.comments}></CommentList>

        </>
    );
}