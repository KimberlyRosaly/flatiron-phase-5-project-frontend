//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ArtistHeader = (props) => {

    const backgroundStyle = {
        backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 40%, rgba(14,14,33,0) 100%)
        ,
        url(${props.artist ? props.artist.image_url : null})
        `,    
        backgroundSize: "150%",
        backgroundRepeat: 'no-repeat'
    }
    
    return(
        <div className='artist-header' style={backgroundStyle}>
            <h1 style={{fontSize: '75px'}}>{props.artist ? props.artist.name : null}</h1>
            <p>{props.artist ? props.artist.title : null}</p>
        </div>
    )
}
export default ArtistHeader;