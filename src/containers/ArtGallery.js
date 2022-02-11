import React from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// CONNECT FUNCTIONALITY HAS BEEN MOVED
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import ArtistShowcase from './ArtistShowcase';
import NavigationBar from '../components/NavigationBar'
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-IMPORTSend

class ArtGallery extends React.Component {

//* = - = - = - = - = - = - = - L I F E C Y C L E METHODS
// WHEN THIS COMPONENT IS MOUNTED TO THE DOM (RENDERED), THEN..
    componentDidMount(){
        console.log(this.props)
    }
//* = - = - = - = - = - = - = - L I F E C Y C L E METHODSend    

    render(){

        return (
            <div>
                <NavigationBar />

                <ArtistShowcase artist={this.props.showcase} />
                <br />
            
            </div>
        )
    }
}
export default ArtGallery;
