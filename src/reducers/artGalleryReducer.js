const initialState = {
    artists: [],
    artworks: []
}

export default function reducer(state=initialState, action){

    switch (action.type) {

        case 'FETCH_ARTISTS':
            return { ...state, artists: action.payload }
        case 'FETCH_ARTWORKS':
            return { ...state, artworks: action.payload }
        
    // = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -
        case 'LIKE_ARTWORK':        
        // console.log("REDUCER => STATE:", state, "ACTIONPAYLOAD:", action.payload)
    
            //* PAYLOAD CONTAINS UPDATED/PATCHED ARTWORK | COPY ALL OF STATE, 
            //* ITERATION FOR EACH ELEMENT IN ARRAY OF ARTWORK OBJECTS
            //* IF THE STATE ARTWORK'S ID EVALUATES TO THE PAYLOAD'S OBJECT ID, COPY PAYLOAD OBJECT INTO NEW STATE
            //* OTHERWISE, THE ARTWORK OBJECT IN STATE IS TO BE AS IS

            return { ...state, artworks: state.artworks.map(a => a.id == action.payload.id ? action.payload : a)}  

            //* 'MAP(i => ...)' - CALLBACK FUNCTION - CALLED FOR EVERY ELEMENT OF ARRAY - 
            //* RETURNS COPY OF ARRAY WITH LOGICAL EVALUATION ADJUSTMENT FOR EACH TIME ITERATED            
            //* V O I L A ! STATE BECOMES A SAME COPY E X C E P T FOR THE STATE OBJECT THAT IS DIFFERENT
    // = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -
    
        default:
            return { ...state }            
    }
}