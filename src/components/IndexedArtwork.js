import React from 'react';

import IndexedArtworkLikeButton from './IndexedArtworkLikeButton'

const IndexedArtwork = (props) => {

    // console.log(props)

    return (
        <div className='indexed-artwork'>  

            <h2>{props.title}</h2>

            
            <img src={props.image_url} />
            <br />

            <p>{props.artist.name}</p>

            <h3>( {props.likes} ) ♥'s</h3>

            <IndexedArtworkLikeButton {...props}/>     

        </div>
    )
}
export default IndexedArtwork;