import React from 'react'

const ArtistSupports = (props) => {
    // CREATE PASSAGEWAY TO TEST FOR INCOMING OBJECTS VIA CONSOLE
    // const aa = props.artists ? props.artists : null
    // console.log("INDEX:", props, aa)

    return (
        <div>
            {props.artists.map( (a) => <p>a.name</p> )}
        </div>
    )
}
export default ArtistSupports;