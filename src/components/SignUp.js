import {useDispatch} from "react-redux";
import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {LOGIN, SIGNUP} from "../modules/reducer";

export default function SignUp(){
    const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function onSubmit(event){
        event.preventDefault();
        dispatch({type: SIGNUP, data: {username, password}})
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder={"Username"}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={"Password"}></Form.Control>
                </Form.Group>
                <Button type={"submit"}>Sign-Up</Button>
            </Form>
        </>
    );
}