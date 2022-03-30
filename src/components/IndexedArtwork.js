import React from 'react'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import IndexedArtworkLikeButton from './IndexedArtworkLikeButton'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const IndexedArtwork = (props) => {

    // console.log("INDEXED ARTWORK PROPS:", props)

    return (
        <div className='indexed-artwork'>  
            <Link to={`/artgallery/artworks/${props.id}`}>
                <h2>{props.title} ☚</h2>
            </Link>
            
            <img src={props.image_url} /><br />            

            <Link to={`/artgallery/artists/${props.artist.id}`}>
                <p>{props.artist.name} ☚</p>
            </Link>

            <h3 style={{}}>
                ( <span style={{color: 'red'}}>{props.likes}</span> ) <span style={{color: 'red'}}>♥</span>'s
            </h3>

            <IndexedArtworkLikeButton {...props}/>     
        </div>
    )
}
export default IndexedArtwork;