//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavigationBar from '../components/NavigationBar'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// THIS  C O N T A I N E R  WILL HOUSE AN INDIVIDUAL ARTWORK'S SHOW PAGE
const ArtworkShow = (props) => {
    
    let theArtworkID = props.match.params.id
    const theArtwork = props.artworks.find((a) => a.id == theArtworkID)

    return (
        <div>
            <NavigationBar />
            <div>
                {theArtwork ? theArtwork.title : null}
                {/* ▼ IMAGE LIVES HERE ▼ */}
                <div style={{ backgroundImage: `url(${theArtwork ? theArtwork.image_url : null})` }} className='artwork-show-image' />
                BY : {theArtwork ? theArtwork.artist.name : null}
            </div>
        </div>
    )
}
export default ArtworkShow;
