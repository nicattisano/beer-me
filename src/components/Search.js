import React from 'react';

class Search extends React.Component {
  static contextTypes = {
    //ask for the router to be exposed
    router: React.PropTypes.object.isRequired
  }
  handleSubmit = (e) => {
    //stop the form from submitting as per usual
    e.preventDefault();
    //get the val of the input
    const searchTerm = this.q.value;
    console.log(searchTerm);
    this.context.router.history.push(`/search/${searchTerm}}`);
  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(q) => this.q = q} placeholder="Hoppy, Malt, Angry, New..." />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;
