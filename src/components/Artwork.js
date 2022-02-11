import React from 'react';
import { connect } from 'react-redux';

import ArtworkLikeButton from './ArtworkLikeButton'

//?  F U N C T I O N A L   C O M P O N E N T
const Artwork = (props) => {



    return (
        <div className='artwork'>
            
            <hr />
            <img src={props.artwork.image_url} className="artwork-image" />
            <div>
                {props.artwork.title}
                <br />
                {props.artwork.medium}
                <br />
                {/* {props.artwork.likes} */}
                <br />
                {/* THIS IS BROKEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                {/* <ArtworkLikeButton artwork={props.artwork} /> */}
            </div>
            <hr />
                
        </div>
    )
}

//? MAYBE STATE STUFF WITH CONNECT CAN LIVE HERE????
// const mapStateToProps = (state) => {
//     return {
//         artwork: state.artwork
//     }
// }
// export default connect(mapStateToProps)(Artwork);
// ++++++++++++++++++++++++++++++++++++++++++++++
export default Artwork;