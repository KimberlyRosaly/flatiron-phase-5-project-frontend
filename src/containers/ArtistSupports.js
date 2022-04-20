import React from 'react'

const ArtistSupports = (props) => {
    // CREATE PASSAGEWAY TO TEST FOR INCOMING OBJECTS VIA CONSOLE
    // const aa = props.artists ? props.artists : null
    // console.log("INDEX:", props, aa)

    return (
        <div>
            {/* { props.artists.map((a) => <p key={a.id} >a.name</p>) } */}
            <ul>
                    
                <li>
                    <h2>{ props.artists ? props.artists[0].name : null }</h2>
                </li>
                
                <li>
                    <h2>{ props.artists ? props.artists[1].name : null }</h2>
                </li>
                
                <li>
                    <h2>{ props.artists ? props.artists[2].name : null }</h2>
                </li>

            </ul>
        </div>
    )
}
export default ArtistSupports;