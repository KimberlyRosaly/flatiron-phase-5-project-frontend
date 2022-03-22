import React from 'react';
import './App.css';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Route, Switch } from 'react-router-dom';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import ArtGallery from './containers/ArtGallery';
import Intro from './components/Intro';
import Artists from './components/Artists'
import Artist from './components/Artist'
import ArtworksIndex from './containers/ArtworksIndex';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { connect } from 'react-redux';
import { fetchArtists } from './actions/fetchArtists';
import { fetchArtworks } from './actions/fetchArtworks';
//^ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-IMPORTSend


// RUN APP AS CLASS COMPONENT FOR ADDED FUNCTIONALITY
// ACCESS TO STATE AND LIFECYCLE METHODS
class App extends React.Component {

//! = - = - = - = - = - = - = - = - = - = - = T E S T I NG
  //TODO| PLAY WITH A LIFECYCLE METHOD
  componentDidMount() {    
    this.props.fetchArtists()
    this.props.fetchArtworks()
  }
//! = - = - = - = - = - = - = - = - = - = - = TESTINGend

  render() {
    return (
      <div className="App">
        
        {/* USE 'SWITCH' CASE STATEMENT TO FIND FIRST MATCH & STOP */}
        <Switch>
          {/* MAKE SOME URL PATH DECLARATIONS & THEIR SPECIFIC COMPONENTS TO RENDER */}

//^ = - = - = - = - = - = - = - = - = - = IT'S TIME TO UTILIZE R O U T E R P R O P S FOR A DYNAMIC URL         
 {/* 'RENDER' TAKES IN A FUNCTION  | 'ROUTEPROPS' GIVES ACCESS TO 'HISTORY' 'PUSH' 'MATCH' ♥ */}

          {/* 'ROUTEPROPS' WILL GIVE ACCESS TO PARAMS AND GRAB ONTO AN ID */}


//^ = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - =

{/* ARTWORK SHOW PAGE > NESTED UNDER ARTIST'S SHOW PAGE */}

{/* <Route path="/artgallery/artists/:artistID/artworks/:artworkID" /> */}


//^ = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - =


          <Route path="/artgallery/artists/:id" render={(routeProps) => <Artist {...routeProps} artists={this.props.artists} /> } />
          <Route path="/artgallery/artists" render={(routeProps) => <Artists {...routeProps} artists={this.props.artists} />} />
          
          
          {/* IM SCARED */}
          <Route path="/artgallery/artworks" render={(routeProps) => <ArtworksIndex {...routeProps} artists={this.props.artists} artworks={this.props.artworks} />} />

//^ = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - =

          {/* <Route path="/artgallery/artists"><Artists artists={this.props.artists} /></Route> */}
          <Route path="/artgallery"><ArtGallery artists={this.props.artists} showcase={this.props.showcase} /></Route>
          <Route path="/" component={Intro} />
        </Switch>
        
        
      </div>
    )}}

//? =-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=C O N N E C T  
const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    showcase: state.artists[0],

    artworks: state.artworks
  }
}
export default connect(mapStateToProps, {fetchArtists, fetchArtworks})(App);
//? =-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=CONNECTend
