import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slugify';

class Beer extends React.Component {
  render() {
    const {id, name, labels} = this.props.details;
    const image = labels.medium;
    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        </Link>
      </div>
    )
  }
}

export default Beer;
