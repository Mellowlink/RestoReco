import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Venue from './Venue';
import SearchBar from './SearchBar';
import Map from './Map';

var headerText = "Welcome to die";

var clientID = '2BGCGEO4ZYHCVODN3KCHW5XWSB1J4D0OHC2RA2GJZRJ1U5TR';
var clientSecret = 'HUGXJ0TZZOY3YMVPSMK0U0KPHSFXUUAEJMWZW1SS423Q0U3R';
var latitude = 35.669988;
var longitude = 139.751705;
var distance = 5000;
var baseurl = 'https://api.foursquare.com/v2/venues/search?v=20180412&limit=50&intent=browse&categoryId=4d4b7105d754a06374d81259';


class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      venues: []
    };

    this.searchVenues = this.searchVenues.bind(this);
  }

  componentDidMount(){
    fetch(baseurl + `&radius=${distance}&ll=${latitude},${longitude}&client_id=${clientID}&client_secret=${clientSecret}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            venues: result.response.venues
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  }

  render(){
    return (
      <div className="App">
        <Header text={headerText} />
        <div className="main-map">
          <Map height='750px' width='750px' lat={latitude} lng={longitude}/>
        </div>
        <div className="venues">
          <SearchBar search={this.searchVenues}/>
          <ul className="list-group">
            {
              Object
              .keys(this.state.venues)
              .map(key => <Venue key={key} meta={this.state.venues[key]} />)
            }
          </ul>
        </div>
      </div>
    );
  }

  searchVenues(searchKey){
    console.log(searchKey);

    fetch(baseurl + `&radius=${distance}&ll=${latitude},${longitude}&client_id=${clientID}&client_secret=${clientSecret}&query=${searchKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            venues: result.response.venues
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }
}

export default App;
