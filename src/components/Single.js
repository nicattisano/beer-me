import React from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

class Single extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: [],
      loading: true
    }
  }

  loadBeer = (beerId = this.props.match.params.beerID) => {
    //set loader on
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(beer => {
        const theBeer = beer.data;
        console.log(theBeer);
        //filter beers for only those which have a labels property
        // const filteredBeer = beer.data.filter(beer => beer.beerId);
        this.setState({
          beer: theBeer,
          loading: false
         });
      })
  }

  componentWillMount() {
    this.loadBeer();
  }

  render() {
    // const theBeerId = this.props.match.params.beerID;
    if(this.state.loading) {
      return <Loader loaderMsg="Pouring a cold one!" />
    }
    return (
      <div className="single-beer">
      <Link to="/">Back</Link>
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.description}</p>
        <p>Organic? <span><strong>{this.state.beer.isOrganic}</strong></span></p>
        <img src={this.state.beer.labels.large} alt={this.state.beer.labels.name} />
      </div>
    )
  }
}

export default Single;
