import React, { Component } from "react";
import './RoomsList.css';
import Room from './Room';

class RoomsList extends Component {
    render() {
        // console.log(this.props);
        return(
            <div className='PostsList_list'>
                {
                    this.props.items.map(room => <Room
                        key={room.id}
                        item={room} 
                        // onLikedClicked={this.props.onLikedClicked}
                        />)
                }
            </div>
        );
    }
}

export default RoomsList;