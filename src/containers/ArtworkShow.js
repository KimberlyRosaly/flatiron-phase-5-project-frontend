//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// THIS CONTAINER WILL HOUSE AN INDIVIDUAL ARTWORK'S SHOW PAGE
const ArtworkShow = (props) => {
    
    let theArtworkID = props.match.params.id
    const theArtwork = props.artworks.find((a) => a.id == theArtworkID)



    return (
        <div>
            {theArtwork ? theArtwork.title : null}
            {/* ▼ IMAGE LIVES HERE ▼ */}
            <div style={{ backgroundImage: `url(${theArtwork ? theArtwork.image_url : null})` }} className='artwork-show-image' />
            BY : {theArtwork ? theArtwork.artist.name : null}
        </div>
    )
}
export default ArtworkShow;
