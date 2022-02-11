

export function fetchArtists(){

    return (dispatch) => {
            // MAKE A BASIC, DEFAULT 'GET' FETCH REQUEST
        fetch('http://127.0.0.1:3001/api/v1/artists')
            // CHAIN TO HANDLE THE RECEIVED ASYNCHRONOUS RESPONSE
            // RECEIVE THE PROMISE *THEN* FORMAT INTO JAVASCRIPT OBJECT NOTATION
        .then(response => response.json())
            // THEN* DO SOMETHING WITH THE JSON DATA
        .then(artists => {
            return dispatch({
                type: 'FETCH_ARTISTS',
                payload: artists
            })
        })   
    }
}
