import { Card } from 'antd';
import React, { Component } from 'react'

const gridStyle = {
    width: '30%',
    textAlign: 'center',
  };
class Picture extends Component{
    render(){
        return(
            <Card title="分类">
                <Card.Grid style={gridStyle}>风景</Card.Grid>
                <Card.Grid style={gridStyle}>生活</Card.Grid>
                <Card.Grid style={gridStyle}>人文</Card.Grid>
                <Card.Grid style={gridStyle}>动漫</Card.Grid>
                <Card.Grid style={gridStyle}>星空</Card.Grid>
                <Card.Grid style={gridStyle}>壁纸</Card.Grid>
            </Card>
        )
    }
        
        
}

export default Picture;