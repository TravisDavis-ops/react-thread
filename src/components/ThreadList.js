import {useSelector} from "react-redux";
import Thread from "./Thread";
import {ListGroup} from "react-bootstrap";

export default function ThreadList(props){
    const threads = useSelector(state => {
        return state.threadList;
    })
    return (
        <ListGroup>
            {
                threads.map((thread, idx) => {
                    return (
                        <ListGroup.Item key={idx}>
                            <Thread thread={thread}></Thread>
                        </ListGroup.Item>
                    );
                })
            }
        </ListGroup>
    );
}