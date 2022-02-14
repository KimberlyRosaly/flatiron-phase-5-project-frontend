//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
import { Link } from 'react-router-dom';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavigationBar from './NavigationBar';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


//?  F U N C T I O N A L   C O M P O N E N T
const Artists = (props) => {    

    return (
        <div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
            <NavigationBar />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}

            
            {props.artists.map(a => 
                <div key={a.id} className='artist'>
                    
                    <Link to={`/artgallery/artists/${a.id}`}>                    
                        <h1>{a.name}</h1>
                    </Link>

                    <img className="artist-profile-image" src={a.image_url} />
                    <h1>{a.title}</h1>
                    <h2>{a.biography}</h2>
                    <p>{a.skills}</p>

                    <p>{a.location}</p>
                </div>

                )}
                 
        </div>
    )
}
export default Artists;