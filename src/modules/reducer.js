import {v4} from "uuid";

const initialState = {
    currentUser: undefined,
    userList: [
        {id: v4(), username: "test", password: "pass"}
    ],

    threadList: [
        {
            id: v4(),
            title: "TestThread",
            description: "A description.",
          comments: [
                {id: v4(), body: "Ha Funny"}
            ],
        },
        {
            id: v4(),
            title: "TestThread2",
            description: "A description.",
          comments: [],
        },
        {
            id: v4(),
            title: "TestThread",
            description: "A description.",
          comments: [],
        },

    ],
};
export const LOGIN = "login";
export const LOGOUT = "logout";
export const SIGNUP = "signup";
export default function reducer(state=initialState, action){
    /*
    {
        type: <ident>
        data: {
            ..extra info
        }
    }
    * */
    switch (action.type) {
        case LOGIN: {
            // in the login actions data i will provide the cred
            let { username, password} = action.data;
            let user = state.userList.find(user=> user.username == username)
            if(!user){
                return state;
            }
            if(user.password != password){
                return state;
            }
            return {...state, currentUser: user}
        }
        case LOGOUT: {
            return {...state, currentUser: null}
        }
        case SIGNUP: {
            let { username, password} = action.data;
            return {...state, userList:[...state.userList, {id: v4(), username, password}]}
        }
        default:
            return state
    }
}