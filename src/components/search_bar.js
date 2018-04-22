import React, {
  Component
} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {

    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    ); //end return
  } //end render()

  onInputChange(term) {
    this.setState({
      term
    });
    this.props.onSearchTermChange(term);
  }

} //end SearchBar class

export default SearchBar;