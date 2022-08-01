import {useState} from "react";
import {Button, Form, FormGroup, FormLabel} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {CREATE_THREAD} from "../modules/reducer";

export default function CreateThread(){
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    function onSubmit(e){
        e.preventDefault();
        dispatch({
            type: CREATE_THREAD,
            data: {
                title,
                description,
            }
        })
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type={"text"}
                    value={title}
                    onChange={event => setTitle(event.target.value)}></Form.Control>
            </FormGroup>
            <FormGroup>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as={"textarea"}
                    value={description}
                    onChange={event => setDescription(event.target.value)}></Form.Control>
            </FormGroup>
            <Button type={"submit"}>Add</Button>
        </Form>
    );
}