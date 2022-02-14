//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Artwork from './Artwork';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//?  F U N C T I O N A L   C O M P O N E N T
const Artworks = (props) => {
    return (
        <div className='artworks'>
            
            {props.artworks.map(a => <Artwork artwork={a} key={a.id} />)}

        </div>
    )
}
export default Artworks;