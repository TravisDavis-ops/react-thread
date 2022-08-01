import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useSelector} from "react-redux";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ThreadList from "./components/ThreadList";
import CreateThread from "./components/CreateThread";

function App() {
    const loggedIn = useSelector(state => state.currentUser);
    if(loggedIn){
        return (
            <>
                <CreateThread></CreateThread>
                <ThreadList></ThreadList>
            </>
        );
    }
    return (
        <>
            <Login></Login>
            <SignUp></SignUp>
        </>
    );
}

export default App;
