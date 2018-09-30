import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div style={{margin:'20px'}}>
            <Input
                onChange={props.handleInputChange}
                placeholder="请输入"
                style={{width: '300px', marginRight:'10px'}}
                value={props.inputValue}/>
            <Button
                type="primary"
                onClick={props.handleBtnClick}>提交</Button>

            <List
                style={{width:'400px', marginTop: '20px'}}
                size="large"
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
export default TodoListUI