import React, { Component } from 'react';
import { connect } from 'react-redux';

import { likeArtwork } from '../actions/likeArtwork';

class ArtworkLikeButton extends Component {

    // ! CALL ACTION HERE?
handleOnClick() {
    console.log("LIKES:", this.props.artwork.likes, "ARTWORK ID:", this.props.artwork.id)
    //? WHEN CLICKED ON, THE COMPONENT CAN PASS IN DATA OVER TO AN ACTIONCREATOR
    this.props.likeArtwork(this.props.artwork);
}

    render() {
        return (
            <div>
                <button onClick={(event) => this.handleOnClick(event)}>
                    {this.props.artwork.likes} ♥'s
                </button>
            </div>
        )
    }
}

// ? ----------------------------------------------
// ? PROPS CAN NOW CONTAIN AN ACTION TO DISPATCH
const mapDispatchToProps = (dispatch) => {
	return { likeArtwork: () => dispatch( likeArtwork() ) }
}
// ? ----------------------------------------------
// ? CONNECT.. PROPS CONTAIN DISPATCH ACTIONS | ALLOW FOR THIS ACTION CREATOR | EXPORT THIS COMPONENT
export default connect( mapDispatchToProps, {likeArtwork} )(ArtworkLikeButton);

