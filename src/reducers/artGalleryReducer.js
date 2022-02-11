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

        //! T H I S   I S   C O N F U S I N G   T O   M E
        case 'LIKE_ARTWORK':        
            // console.log("REDUCER =>", "STATE:", state, "ACTIONPAYLOAD:", action.payload)
            //? SETSTATE WHERE??? THIS DOESN'T WORK. I'M MISSING SOMETHING
            //! this.setState((prevState) => {artwork: action.payload})
            return { ...state, artwork: action.payload }
            //! ACTION.PAYLOAD RETURNS A SUCCESSFULLY UPDATED ARTWORK <3 
            //! HOW DO I UPDATE STATE TO REFLECT THIS CHANGE IN THE DATABASE?
        //! B R O K E N
            
        default:
            return { ...state }            
    }
}