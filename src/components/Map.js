import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component{
  render(){
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: this.props.lat, lng: this.props.lng } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
    ));

    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: this.props.height, width: this.props.width }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
}

export default Map;
