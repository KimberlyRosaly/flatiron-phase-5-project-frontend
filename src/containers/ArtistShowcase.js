//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Artworks from '../components/Artworks';
import ArtistSupports from './ArtistSupports';
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
                    <a style={{textDecoration: 'none'}} 
                    href={props.artist ? props.artist.website_url : null}>{props.artist ? props.artist.website_url : null}</a>
                    <br />
                    BIOGRAPHY: <br />
                    {props.artist ? props.artist.biography : null}
                </div>
            </div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <Artworks artworks={props.artist ? props.artist.artworks : null} />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}       

            <ArtistSupports artists={props.artists} />

        </div>
    )
}
export default ArtistShowcase;