//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import ArtistShowcase from './ArtistShowcase';
import NavigationBar from '../components/NavigationBar'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-IMPORTSend

class ArtGallery extends React.Component {

    render(){

        return (
            <div>
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
                <NavigationBar />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}
                <ArtistShowcase artist={this.props.showcase} artists={this.props.artists} />
{/*  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */}        
           
            </div>
        )
    }
}
export default ArtGallery;
