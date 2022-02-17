import React from 'react';
import Artworks from '../components/Artworks';

const ArtistShowcase = (props) => {
    return (
        <div className='showcase'>            
            <h1>{props.artist ? props.artist.name : null}</h1>
            <img className="artist-profile-image" src={props.artist ? props.artist.image_url : null} />
            <p>{props.artist ? props.artist.title : null }</p>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <Artworks artworks={props.artist ? props.artist.artworks : null} />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}            
        </div>
    )
}
export default ArtistShowcase;