import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Map from './Map';

class VenueDetails extends Component{
  render(){
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.meta.name}<br/><small><strong>({this.props.meta.categories[0].shortName})</strong> {this.props.meta.location.distance}m away</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Map height='500px' width='750px' lat={this.props.meta.location.lat} lng={this.props.meta.location.lng} />
          <p>{this.props.meta.location.formattedAddress[0]}</p>
          <p>{this.props.meta.location.formattedAddress[1]}</p>
          <p>{this.props.meta.location.formattedAddress[2]}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={this.props.onHide}>Vote for this lunch spot</button>
          <button className="btn btn-danger" onClick={this.props.onHide}>No thanks, take me back</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default VenueDetails;
