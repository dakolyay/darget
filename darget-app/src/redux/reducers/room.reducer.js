const initialState = {
    roomData: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_ROOM' :
            return {
                ...state,
                roomData: action.payload,
            }  
        default: 
            return state;
    }
}