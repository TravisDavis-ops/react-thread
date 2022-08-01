import {useSelector} from "react-redux";

export default function Comment({comment}){
    let owner = useSelector(state=> {
        return state.userList.find(u => u.id = comment.owner);
    })
    return (
        <p>{owner.username}: {comment.body} (on: {comment.dateCreated.toDateString()})</p>

    );
}