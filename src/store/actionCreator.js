import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'
import axios from "axios";
import store from "./index";

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getaddTodoItemAction = () => ({
    type:ADD_TODO_ITEM
})

export const getDelTodoItemAction = (index) => ({
    type:DEL_TODO_ITEM,
    index
})
export const getInitListAction = (list) => ({
    type:INIT_LIST_ACTION,
    list
})
export const getInitList = () => ({
    type: GET_INIT_LIST
})
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/todo').then((res) => {
//             const action = getInitListAction(res.data)
//             dispatch(action)
//         }).catch((err) => {
//             console.log(err);
//         })
//     }
// }