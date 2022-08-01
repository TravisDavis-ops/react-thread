import {v4} from "uuid";

const initialState = {
    currentUser: undefined,
    userList: [
        //{id: 0, username: "test0", password: "pass"},
        //{id: 1, username: "test1", password: "pass"},
        //{id: 2, username: "test2", password: "pass"},
        //{id: 3, username: "test3", password: "pass"},
        //{id: 4, username: "test4", password: "pass"},
    ],

    threadList: [
    //    {
    //        id: v4(),
    //        title: "TestThread",
    //        description: "A description.",
    //        owner: 0,
    //        dateCreated: new Date(),
    //        comments: [
    //            {id: v4(), body: "Ha Funny 0"},
    //            {id: v4(), body: "Ha Funny 1"},
    //            {id: v4(), body: "Ha Funny 2"},
    //            {id: v4(), body: "Ha Funny 3"},
    //            {id: v4(), body: "Ha Funny 4"},
    //        ],
    //    },
    //    {
    //        id: v4(),
    //        title: "TestThread2",
    //        description: "A description.",
    //        owner: 1,
    //        dateCreated: new Date(),

    //        comments: [
    //            {id: v4(), body: "Ha Funny 0"},
    //            {id: v4(), body: "Ha Funny 1"},
    //            {id: v4(), body: "Ha Funny 2"},
    //            {id: v4(), body: "Ha Funny 3"},
    //            {id: v4(), body: "Ha Funny 4"},
    //        ],
    //    },
    //    {
    //        id: v4(),
    //        title: "TestThread",
    //        description: "A description.",
    //        owner: 2,
    //        dateCreated: new Date(),

    //        comments: [
    //            {id: v4(), body: "Ha Funny 0"},
    //            {id: v4(), body: "Ha Funny 1"},
    //            {id: v4(), body: "Ha Funny 2"},
    //            {id: v4(), body: "Ha Funny 3"},
    //            {id: v4(), body: "Ha Funny 4"},
    //        ],
    //    },

    ],
};
export const LOGIN = "login";
export const LOGOUT = "logout";
export const SIGNUP = "signup";
export const CREATE_THREAD = "create_thread";
export const CREATE_COMMENT = "create_comment";

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
        case CREATE_THREAD: {
            let { title, description } = action.data;
            return {
                ...state,
                threadList: [
                    ...state.threadList,
                    {
                        id: v4(),
                        title,
                        description,
                        owner: state.currentUser.id,
                        dateCreated: new Date() ,
                        comments: [] ,
                    }
                ]
            }
        }
        case CREATE_COMMENT: {
            let { threadId, body } = action.data;
            //const targetThread = state.threadList.find(t => t.id == threadId);
            //if(!targetThread){
            //    return state;
            //}
            function addComment(thread){
                    if(thread.id == threadId){
                        return {
                            ...thread,
                            comments: [
                                ...thread.comments,
                                {
                                    id: v4(),
                                    owner: state.currentUser.id,
                                    dateCreated: new Date(),
                                    body
                                }
                            ]
                        }
                    }
                    return thread;
            }
            const newThreadList = state.threadList.map(addComment)
            return {...state, threadList: newThreadList}
        }
        default:
            return state
    }
}