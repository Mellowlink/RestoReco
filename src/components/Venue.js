import React, { Component } from 'react';
import VenueDetails from './VenueDetails';

class Venue extends Component{
  constructor() {
    super();

    this.state = {
      modalShow: false
    };
  }

  render(){
    let modalClose = () => this.setState({ modalShow: false });

    return(
      <div>
        <a href="#" onClick={() => this.setState({ modalShow: true })} className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.meta.name}</h5>
            <small>{this.props.meta.location.distance}m away</small>
          </div>
          <p>({this.props.meta.categories[0].shortName})</p>
          <br />
          <p>{this.props.meta.location.formattedAddress[0]}</p>
          <p>{this.props.meta.location.formattedAddress[1]}</p>
          <p>{this.props.meta.location.formattedAddress[2]}</p>
        </a>

        <VenueDetails
          show={this.state.modalShow}
          onHide={modalClose}
          meta={this.props.meta}
        />
      </div>
    );
  }
}

export default Venue;
