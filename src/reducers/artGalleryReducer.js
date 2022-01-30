
const initialState = {
    artists: [],
    artworks: []
}

export default function artGalleryReducer( state=initialState, {type, payload} ) {
    
    return { ...state }
            
}
