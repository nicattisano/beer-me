import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <img src="/images/ball.svg" alt="Loader"/>
        <h2>{ this.props.loaderMsg }</h2>
      </div>
    )
  }
}

export default Loader;
