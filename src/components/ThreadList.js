import {useSelector} from "react-redux";
import Thread from "./Thread";

export default function ThreadList(props){
    const threads = useSelector(state => {
        return state.threadList;
    })
    return (
        <>
            {
                threads.map(elem => {
                    return ( <Thread thread={elem}></Thread> );
                })
            }
        </>
    );
}