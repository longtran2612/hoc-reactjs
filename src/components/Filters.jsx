import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import{useDispatch} from 'react-redux'
// import { priorityFilter, searchFilter, statusFilter } from '../redux/action/Actions';
import  filterSlice  from '../redux/reducer/FiltersTodoReducer';
const { Search } = Input;

export default function Filters() {
  
  const dispatch = useDispatch()
   
  const [search, setsearch] = useState('');

  const [status, setstatus] = useState('All');

  const [priority, setpriority] = useState([]);


  const handleSearch=(e)=>{
    console.log('search',e.target.value);
    setsearch(e.target.value)
    dispatch(
      filterSlice.actions.searchFilter(
      e.target.value
    ))
  }
  const hanldeStatus=(e)=>{
    console.log('status',e.target.value);
    setstatus(e.target.value)
    dispatch(
      filterSlice.actions.statusFilter(
      e.target.value
    ))
  }
  const handlePriority =(e)=>{
    
    setpriority(e)
    dispatch(
      filterSlice.actions.priorityFilter(
      e
    ))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' 
                value={search} 
                onChange={handleSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        
        <Radio.Group value={status} onChange={hanldeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priority}
          onChange={handlePriority}
        >
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
      </Col>
    </Row>
  );
}