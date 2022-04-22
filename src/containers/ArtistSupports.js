import React from 'react'

const ArtistSupports = (props) => {
    // CREATE PASSAGEWAY TO TEST FOR INCOMING OBJECTS VIA CONSOLE
    // const aa = props.artists ? props.artists : null
    // console.log("INDEX:", props, aa)

    return (
        <div>
            {/* { props.artists.map((a) => <p key={a.id} >a.name</p>) } */}
            <ul className='support-container'>
                    
                <li>
                    <h2>{props.artists ? props.artists[0].name : null}</h2>
                    <img src={props.artist ? props.artist[0].image_url : null} />
                </li>
                
                <li>
                    <h2>{props.artists ? props.artists[1].name : null}</h2>
                    <img src={props.artist ? props.artist[1].image_url : null} />
                </li>
                
                <li>
                    <h2>{props.artists ? props.artists[2].name : null}</h2>
                    <img src={props.artist ? props.artist[2].image_url : null} />
                </li>

            </ul>
        </div>
    )
}
export default ArtistSupports;