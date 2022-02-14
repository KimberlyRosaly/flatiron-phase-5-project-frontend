//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

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
            </div>
            <hr />
                
        </div>
    )
}

export default Artwork;