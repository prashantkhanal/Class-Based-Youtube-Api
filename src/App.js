import React, { Component } from 'react';
import Input from './components/Input';
import youtube from './api/youtube';
import VideoList from './components/VideoList';

class App extends Component {
  state = {
    videos: [],
  };
  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Input onTermSubmit={this.onTermSubmit} />

        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
