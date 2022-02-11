import React from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavigationBar from './NavigationBar';
import Artwork from './Artwork';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//?  F U N C T I O N A L   C O M P O N E N T
const Artist = (props) => {

    let artist = props.artists[props.match.params.id - 1]
    

    return (
        <div>
            <NavigationBar />
            
            {artist ? artist.name : null}
            <br />
            {artist ? artist.title : null}
            <br />

            <div className='artworks'>
                {artist.artworks.map(a => 
                    <div key={a.id}>
                        <img src={a.image_url} className='artwork-image' />
                        <h2>{a.title}</h2>
                    </div>
                )}
            </div>

            
        </div>
    )
}
export default Artist;