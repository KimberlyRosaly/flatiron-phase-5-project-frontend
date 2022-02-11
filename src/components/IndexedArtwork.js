import React from 'react';

import IndexedArtworkLikeButton from './IndexedArtworkLikeButton'

const IndexedArtwork = (props) => {

    // console.log(props)

    return (
        <div>
            <hr />
            <h2>{props.title}</h2>
            {props.artist.name}
            <br />
            <img src={props.image_url} style={{height: '300px'}} />
            <br />
            ( {props.likes} ) ♥'s

            <IndexedArtworkLikeButton {...props}/>

            <hr />
        </div>
    )
}
export default IndexedArtwork;