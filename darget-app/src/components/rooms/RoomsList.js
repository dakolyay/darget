import React, { Component } from "react";
import axios from 'axios';

import './RoomsList.css';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import Room from './Room';

class RoomsList extends Component {

    state = {
        rooms : []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/rooms')
        .then(res => {
            console.log(res)
            this.setState({
                rooms: res.data
            })
        })
    }

    render() {
        const {rooms} = this.state;

        const roomsList = rooms.length ? (
            rooms.map(room => {
                return(
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title={room.title} bordered={false}>
                                <Room key={room.id}
                                        item={room}
                                >
                                </Room>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )
            })
        ) : (
            <div>No rooms</div>
        )
        return(
            <div>
                {roomsList}
            </div>
        )

    }
}

export default RoomsList;