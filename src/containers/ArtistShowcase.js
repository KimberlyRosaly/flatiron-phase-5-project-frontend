//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Artworks from '../components/Artworks';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ArtistShowcase = (props) => {
    return (
        <div className='showcase'>
                    <h1>{props.artist ? props.artist.name : null}</h1>
                    <h2>{props.artist ? props.artist.title : null }</h2>

{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <div className='s-container'>
                <div className='s-left'>
                    <img src={props.artist ? props.artist.image_url : null} />
                </div>
                <div className='s-right'>
                    SKILLS: <br />
                    {props.artist ? props.artist.skills : null }<br />
                    TOOLS: <br />
                    {props.artist ? props.artist.tools : null }<br />
                    SITE: <br />
                    {props.artist ? props.artist.website_url : null }<br />
                    BIOGRAPHY: <br />
                    {props.artist ? props.artist.biography : null}
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