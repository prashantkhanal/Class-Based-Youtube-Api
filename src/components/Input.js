import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  state = {
    term: '',
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleClick} className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
