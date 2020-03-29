import * as urls from '../constants/urls';

export const getRooms = () => (
    fetch(
        urls.ROOMS_URL,
        {
        method: 'GET',
        }
    )
)