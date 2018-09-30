const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'change_input_value':
            newState.inputValue = action.value
            return newState
            break
        case 'add_item':
            newState.list.push(state.inputValue)
            return newState
            break
    }
    return state
}