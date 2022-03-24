//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavigationBar from './NavigationBar';
import ArtistHeader from './ArtistHeader';
import ArtistContact from './ArtistContact';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//?  F U N C T I O N A L   C O M P O N E N T
const Artist = (props) => {

    let artist = props.artists[props.match.params.id - 1]

    return (
        <div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <NavigationBar />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <ArtistHeader artist={artist} />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}            
            <div className='artworks' style={{fontFamily: 'Geo'}}>

                {artist.artworks.map(a => 
                    <div key={a.id}>
                        <Link to={`/artgallery/artworks/${a.id}`}>
                            <img src={a.image_url} className='artwork-image' />
                        </Link>
                        <h2 style={{textShadow: '1px 1px 1px white', color: 'violet'}}>
                            "{a.title}"
                        </h2>
                    </div>
                )}

            </div>    
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <ArtistContact artist={artist} />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}    
                  
        </div>
    )
}
export default Artist;