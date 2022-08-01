import {Button, Form, FormGroup} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {CREATE_COMMENT} from "../modules/reducer";

export default function PostComment({threadId}){
    const dispatch = useDispatch();
    const [body, setBody] = useState('')
    function onSubmit(event){
        event.preventDefault();
        dispatch({
            type: CREATE_COMMENT,
            data:{
                threadId,
                body,
            }
        })
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                    as={"textarea"}
                    value={body}
                    onChange={e => setBody(e.target.value)}>

                </Form.Control>
            </FormGroup>
            <Button type={"submit"}> Post</Button>
        </Form>
    );
}