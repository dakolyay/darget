import * as actionTypes from '../constants/actionTypes';
import * as roomApi from '../api/room.Api';

export const getRooms = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_ROOMS_STARTED
    })

    roomApi
        .getRooms()
        .then(
            response => {
                response
                    .text()
                    .then(
                        value => {
                            const rooms = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_ROOMS_SUCCESS,
                                rooms,
                            });
                        }
                    );
            }
        )

}