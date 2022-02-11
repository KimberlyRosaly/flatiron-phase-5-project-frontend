import React from 'react';
import Artworks from '../components/Artworks';

const ArtistShowcase = (props) => {
    return (
        <div style={{color: 'blue'}} className='showcase'>
            
            <h1>{props.artist.name}</h1>
            <img className="artist-profile-image" src={props.artist.image_url} />
            <p>{props.artist.title}</p>

            <Artworks artworks={props.artist.artworks} />
            
        </div>
    )
}
export default ArtistShowcase;