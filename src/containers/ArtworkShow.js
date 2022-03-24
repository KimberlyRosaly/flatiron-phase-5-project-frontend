//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavigationBar from '../components/NavigationBar'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// THIS  C O N T A I N E R  WILL HOUSE AN INDIVIDUAL ARTWORK'S SHOW PAGE
const ArtworkShow = (props) => {
    
    let theArtworkID = props.match.params.id
    const theArtwork = props.artworks.find((a) => a.id == theArtworkID)

    return (
        <div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <NavigationBar />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <div>
                <div className='artwork-show-header'>
                    {theArtwork ? theArtwork.title : null}</div>
                              
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
                <div className='artwork-show-container'>

                    <div className='artwork-show-image'>
                        <img src={theArtwork ? theArtwork.image_url : null} /></div>

                    <div className='artwork-show-info'>
                        <h2>"{theArtwork ? theArtwork.description : null}"</h2>
                        <p>{theArtwork ? theArtwork.dimensions : null}</p>
                        <p>{theArtwork ? theArtwork.medium : null}</p>
                        <p>CREATED BY : <Link to={`/artgallery/artists/${theArtwork.artist.id}`}>{theArtwork ? theArtwork.artist.name : null}</Link></p></div>           

                </div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}                
            </div>
        </div>
    )
}
export default ArtworkShow;
