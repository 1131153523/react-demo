import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'


const defaultState = {
    inputValue:'',
    list:[]
}


export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value
            return newState
            break
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue)
            return newState
            break
        case DEL_TODO_ITEM:
            newState.list.splice(action.index,1)
            return newState
            break
        case INIT_LIST_ACTION:
            newState.list.push(...action.list)
            return newState
            break
    }
    return state
}