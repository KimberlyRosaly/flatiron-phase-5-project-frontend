import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar';
import IndexedArtwork from '../components/IndexedArtwork';

//?  F U N C T I O N A L   C O M P O N E N T
const ArtworksIndex = (props) => {

    return (
        <div>

            <NavigationBar />
            
            {props.artworks.map(artwork => <IndexedArtwork {...artwork} key={artwork.id} />)}
                
        </div>
    )
}

//? MAYBE STATE STUFF WITH CONNECT CAN LIVE HERE????
const mapStateToProps = (state) => {
    return {
        artworks: state.artworks
    }
}
export default connect(mapStateToProps)(ArtworksIndex);