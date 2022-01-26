import { Col, Row, Input, Button, Select, Tag } from 'antd';

import Todo from './Todo';
import {useDispatch, useSelector} from 'react-redux'
import  {v4 } from 'uuid'
import { useState } from 'react';
import { todoRemainingSelector  } from '../redux/selector/TodoListSelector';
import  TodoListSlice  from '../redux/reducer/AddTodoReducer';

export default function TodoList() {
  
  const [name, setname] = useState('');
  const [priority, setpriority] = useState('Medium');

  const TodoList= useSelector(todoRemainingSelector);


  console.log('Todo list',TodoList);

  const dispatch = useDispatch()

  const handleAdd =()=>{
    dispatch(
      TodoListSlice.actions.addTodo({
      id:v4(),
      name :name,
      priority:priority,
      completed: false,
    }))
    setname('')
  }

  const handleInputChange =(e)=>{
    console.log(e.target.value);
    setname(e.target.value)
  }
  const handlePriorityChange =(value)=>{
    console.log({value});
    setpriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          TodoList.map(todo=>
            <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>
            )
          
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}