import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//^ ALLOW FUNCTIONAL COMPONENT ACCESS TO STATE
import { useState } from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { connect } from 'react-redux';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//^ THE A C T I O N   C R E A T O R  FUNCTION THAT WILL PATCH & DISPATCH ITS ACTION|.TYPE
import { likeIndexedArtwork } from '../actions/likeIndexedArtwork';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


const IndexedArtworkLikeButton = (props) => {

//-------- l O C A L  S T A T E | SET WITH INITIAL VALUE
    const [state, setState] = useState({toggle: false})
//------------------------------------------------------

    function handleOnClick() {
        // BUTTON IS CLICKED | ACTION IS DISPATCHED WITH PAYLOAD
        props.likeIndexedArtwork(props.id, props.likes)
        // BUTTON HAS PROP THAT WILL NOW DISABLE IT
        setState({toggle: true})
    }
     
    return (
        <div>
            <button onClick={handleOnClick} className='like-button' disabled={state.toggle}>            
                ♥
            </button>
        </div>
    )
}
export default connect(null, {likeIndexedArtwork})(IndexedArtworkLikeButton);
