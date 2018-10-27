import React, { Component } from 'react';
import Header from '../header';
import SiderMune from '../menu';
import '../../App.css';


class Home extends Component{
    render() {
        return (
            <div>
                <Header />
                <SiderMune />
            </div>
        )
    }
}
export default Home;