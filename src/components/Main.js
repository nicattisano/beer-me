import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      numBeers: 10,
      beers: [],
      loading: true
    }
  }
  incrementBeers = () => {
    //make new var of updated state
    const updatedBeers = this.state.numBeers + 1;
    //then set that var into state with setState()
    this.setState({
      numBeers: updatedBeers
    });
  }
  loadBeers = (searchTerm = 'hops') => {
    //set loader on
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then(beers => {
        //filter beers for only those which have a labels property
        const filteredBeers = beers.data.filter(beer => beer.labels);
        this.setState({
          beers: filteredBeers,
          loading: false
         });
      })
  }

  componentWillMount() {
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  }

//when we research from a search term we need to hook
//into the props update lifecycle event to trigger a new search
  componentWillReceiveProps(nextProps){
    this.loadBeers(nextProps.match.params.searchTerm);
  }
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me! 🍺" />
        <br/>
        <Search />
        {/*
          <button onClick={ this.incrementBeers }>{this.state.numBeers}</button>
        */}
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
}

export default Main;
