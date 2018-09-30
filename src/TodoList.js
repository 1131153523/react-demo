import React, {Component, Fragment} from 'react'
import store from './store'
import axios from "axios"
import TodoListUI from './TodoListUI'
import {getInputChangeAction, getaddTodoItemAction, getDelTodoItemAction, getInitListAction, getInitList} from './store/actionCreator'
export default class Class  extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange  = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick (e) {
        const action = getaddTodoItemAction()
        store.dispatch(action)
    }
    handleItemDelete (index) {
        const action = getDelTodoItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}/>
        )
    }
    componentDidMount(){
        const action  = getInitList()
        store.dispatch(action)
        // axios.get('/todo').then((res) => {
        //     const action = getInitListAction(res.data)
        //     store.dispatch(action)
        // }).catch((err) => {
        //     console.log(err);
        // })
    }
}