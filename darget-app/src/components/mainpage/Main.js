import React, { Component } from 'react';

import './main.css';
import RoomsList from '../rooms/RoomsList';

const room = "First";

const rooms = [
    {
        id: 2,
        name: "Second",
    },
    {
        id: 3,
        name:"Third",
    },
];

class Mainpage extends Component {
  render() {
    return (
        <div className="container">
            <RoomsList items={rooms}>
                
            </RoomsList>
        </div>
    );
  }
}

export default Mainpage;