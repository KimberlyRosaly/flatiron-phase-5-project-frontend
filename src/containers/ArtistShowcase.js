//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Artworks from '../components/Artworks';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ArtistShowcase = (props) => {
    return (
        <div className='showcase'>
                    <h1>{props.artist ? props.artist.name : null}</h1>

{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <div className='s-container'>
                <div className='s-left'>
                    <img src={props.artist ? props.artist.image_url : null} />
                </div>
                <div className='s-right'>
                    <p>{props.artist ? props.artist.title : null }</p>
                </div>
            </div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <Artworks artworks={props.artist ? props.artist.artworks : null} />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}            
        </div>
    )
}
export default ArtistShowcase;