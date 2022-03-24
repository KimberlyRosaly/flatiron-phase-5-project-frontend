//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//?  F U N C T I O N A L   C O M P O N E N T
const Artwork = (props) => {

    return (
        <div className='artwork'>
            <Link to={`/artgallery/artworks/${props.artwork.id}`}>
                <img src={props.artwork.image_url} className="artwork-image" />
            </Link>
            <hr />
            <div>
                {props.artwork.title}
                <br />
                {props.artwork.medium}
            </div>
            <hr />
                
        </div>
    )
}

export default Artwork;