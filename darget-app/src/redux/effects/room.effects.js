import {setRoom} from '../actions/room.actions';

export function getRoom() {

    return function(dispatch, getState) {

        return fetch('http://localhost:3000/rooms')
            .then(res => res.json())
            .then(rooms => {
                if (!rooms || !rooms.length) {
                    dispatch(setRoom(null));
                    return;
                }
                const {title, location} = users[
                    Math.floor(Math.random() * rooms.length)
                ];

                dispatch(setRoom({title,location}));

            })
    }
}