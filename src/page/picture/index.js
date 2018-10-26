import { List, Card } from 'antd';
import React, { Component } from 'react'


const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
class Picture extends Component{
    render(){
        return(
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}/>
        )
    }
        
        
}

export default Picture;