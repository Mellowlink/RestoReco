import React, { Component } from 'react';

class SearchBar extends Component{
  render(){
    return(
      <form onSubmit={(e) => this.venueSearch(e)}>
      	<input ref={ (input) => this.searchKey = input } type="text" className="form-control" placeholder="Search" id="search"/><input type="submit" className="form-control" value="Go"></input>
      </form>
    );
  }

  venueSearch(e){
    e.preventDefault();

    this.props.search(this.searchKey.value);
  }
}

export default SearchBar;
