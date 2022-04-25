import React from 'react'
import { Link } from 'react-router-dom';

const ArtistSupports = (props) => {
    // CREATE PASSAGEWAY TO TEST FOR INCOMING OBJECTS VIA CONSOLE
    const aa = props.artists ? props.artists : null
    console.log("INDEX:", props, aa)

    return (
        <div>
            {/* { props.artists.map((a) => <p key={a.id} >a.name</p>) } */}
            <hr />
            <h2>S I S T E R - A R T I S T S</h2>
            <h2>ARTISTS I SUPPORT</h2>
            <h1>☟</h1>
            <div className='support-container'>
                    

                <div>
                <Link to="/artgallery/artists/1">
                    <h2>{props.artists ? props.artists[0].name : null}</h2>
                    <img src={props.artists ? props.artists[0].image_url : null} />
                </Link>
                    <h2>{props.artists ? props.artists[0].title : null}</h2>                    
                </div>
                    
                
                <div>
                <Link to="/artgallery/artists/2">
                    <h2>{props.artists ? props.artists[1].name : null}</h2>
                    <img src={props.artists ? props.artists[1].image_url : null} />
                </Link>
                    <h2>{props.artists ? props.artists[1].title : null}</h2>
                </div>
                
                <div>
                <Link to="/artgallery/artists/3">
                    <h2>{props.artists ? props.artists[2].name : null}</h2>
                    <img src={props.artists ? props.artists[2].image_url : null} />
                </Link>
                    <h2>{props.artists ? props.artists[2].title : null}</h2>
                </div>

            </div>
        </div>
    )
}
export default ArtistSupports;