export function likeIndexedArtwork(artworkID, artworkLikes){

    // THUNK ALLOWS FOR DISPATCH TO BE PASSED IN AS AN ARGUMENT | FUNCTION
    return (dispatch) => {
        

        let configurationObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify( {likes: artworkLikes + 1} )
        }

        fetch( ('http://127.0.0.1:3001/api/v1/artworks/' + artworkID), configurationObject )
        .then( response => response.json() )
        .then( artwork => {
            return dispatch({
                type: 'LIKE_ARTWORK',
                payload: artwork
            })
        } )
    }
}
