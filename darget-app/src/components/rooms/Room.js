import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Col, Row } from 'antd';


class Room extends React.Component {

    render() {
        return (
            <div className='Post_item'>
                <div className='Post_item-title'>
                {this.props.item.id}
                </div>
                <div className='Post_item-text'>
                    {this.props.item.name}
                </div>
                {/* <div className='Post_item-buttons'>
                    <button className={this.props.item.liked ? 'liked' : ''}
                    onClick={() => this.props
                    .onLikedClicked(this.props.item.id)}>
                    {this.props.item.liked ? 'liked' : 'like!'}
                    </button>
                </div> */}
            </div>
        );
    }
        //     // <div className='Post_item'>
        //     //     <div className='Post_item-title'>
        //     //         {this.props.item.id}
        //     //     </div>
        //     //     <div className='Post_item-text'>
        //     //         {this.props.item.name}
        //     //     </div>
        //         /* <div className='Post_item-buttons'>
        //             <button className={this.props.item.liked ? 'liked' : ''}
        //             onClick={() => this.props
        //             .onLikedClicked(this.props.item.id)}>
        //             {this.props.item.liked ? 'liked' : 'like!'}
        //             </button>
        //         </div> */
        //     // </div>
        // );
    }

export default Room;