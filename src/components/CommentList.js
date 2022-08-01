import {useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import Comment from "./Comment";

export default function CommentList({comments}){
    //const comments = useSelector(
    //    state => {
    //        const targetThread = state.threadList.find(thread => {
    //            return thread.id == id;
    //        });
    //        if(!targetThread){
    //            return
    //        }
    //        return targetThread.comments
    //    }
    //);
    return (
        <ListGroup>
            {
                comments.map((comment, idx) => (
                    <ListGroup.Item key={idx}>
                        <Comment comment={comment}></Comment>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}