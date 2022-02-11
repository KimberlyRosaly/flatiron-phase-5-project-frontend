

export function fetchArtworks(){

    return (dispatch) => {
            // MAKE A BASIC, DEFAULT 'GET' FETCH REQUEST
        fetch('http://127.0.0.1:3001/api/v1/artworks')
            // CHAIN TO HANDLE THE RECEIVED ASYNCHRONOUS RESPONSE
            // RECEIVE THE PROMISE *THEN* FORMAT INTO JAVASCRIPT OBJECT NOTATION
        .then(response => response.json())
            // THEN* DO SOMETHING WITH THE JSON DATA
        .then(artworks => {
            return dispatch({
                type: 'FETCH_ARTWORKS',
                payload: artworks
            })
        })   
    }
}
