export function likeArtwork(artwork){

    // THUNK ALLOWS FOR DISPATCH TO BE PASSED IN AS AN ARGUMENT | FUNCTION
    return (dispatch) => {
        console.log("HELLO! ACTION HERE:", artwork.id)

        let configurationObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify( {likes: artwork.likes + 1} )
        }

        fetch( ('http://127.0.0.1:3001/api/v1/artworks/' + artwork.id), configurationObject )
        .then( response => response.json() )
        .then( artwork => {
            return dispatch({
                type: 'LIKE_ARTWORK',
                payload: artwork
            })
        } )
    }
}


//! THE CONTROLLER UPDATES THE DB ENTRY
//! BUT NOW STATE ISN"T BEING UPDATED ON THE DOM