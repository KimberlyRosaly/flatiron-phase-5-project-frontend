//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const ArtistContact = (props) => {
    return (
        <div className='artist-contact'>
            {props.artist.name}
            <br />
            {props.artist.title}
            <br />
            <h1 style={{textAlign: 'center'}}>{props.artist.biography}</h1>
            <br />
            {props.artist.skills}
            <br />
            {props.artist.tools}
            <br />
            {props.artist.location}
            <br />
            <a href={props.artist.website_url}>{props.artist.website_url}</a>
        </div>
    )
}
export default ArtistContact;