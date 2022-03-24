//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// THIS CONTAINER WILL HOUSE AN INDIVIDUAL ARTWORK'S SHOW PAGE
const ArtworkShow = (props) => {
    // console.log("HELLO, ARTWORKsHOW PROPS:", props)
    let theArtworkID = props.match.params.id
    // console.log("PARAMS:", theArtworkID)
    let theArtwork = props.artworks.find((a) => a.id == theArtworkID)
    // console.log("ARTWORK FOUND???:", theArtwork)

    return (
        <div>
            {theArtwork.title}
            {/* ▼ IMAGE LIVES HERE ▼ */}
            <div style={{ backgroundImage: `url(${theArtwork.image_url})` }} className='artwork-show-image' />
            BY : {theArtwork.artist.name}
        </div>
    )
}
export default ArtworkShow;
