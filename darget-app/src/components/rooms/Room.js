import React from 'react';
import { Button } from 'antd';


class Room extends React.Component {

    render() {
        return (
            <div className='Post_item'>
                <div className='Post_item-title'>
                {this.props.item.id}
                </div>
                <div className='Post_item-text'>
                    {this.props.item.location}
                    {this.props.item.available}
                </div>
                <div>
                <Button className="reserve-button" type="primary" block>
                    Reserve
                </Button>
                </div>
                                   
            </div>
        );
    }

}

export default Room;