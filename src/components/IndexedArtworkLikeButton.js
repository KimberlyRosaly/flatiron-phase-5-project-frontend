import React from 'react';
import { connect } from 'react-redux';

//? THE A C T I O N   C R E A T O R  FUNCTION THAT WILL PATCH & DISPATCH ITS ACTION|.TYPE
import { likeIndexedArtwork } from '../actions/likeIndexedArtwork';


const IndexedArtworkLikeButton = (props) => {    
    
    function handleClick() {
        props.likeIndexedArtwork(props.id, props.likes)
    }
     
    return (
        <div>
            <button onClick={handleClick} style={{backgroundColor: 'red'}}>            
                ♥
            </button>
        </div>
    )
}
export default connect(null, {likeIndexedArtwork})(IndexedArtworkLikeButton);
