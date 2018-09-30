import React, { Component } from 'react';
import { connect }from 'react-redux'
const TodoList = (props) => {
      return (
          <div>
                <div>
                    <input type="text" value={props.inputValue} onChange={props.changeInputValue}/>
                    <button onClick={props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        props.list.map((item, index) => <li key={new Date() + Math.random()}>{index}----{item}----{Date.now() + Math.random()}</li>)
                    }
                </ul>
            </div>
      )
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick (e) {
            const action = {
                type:'add_item'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
