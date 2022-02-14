//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ArtistHeader = (props) => {
    return(
        <div className='artist-header'>
            <h1 style={{fontSize: '75px'}}>{props.artist ? props.artist.name : null}</h1>
            <p>{props.artist ? props.artist.title : null}</p>
        </div>
    )
}
export default ArtistHeader;