import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component{

  state = {
    videos: [],
    selectedVideo: null,
  }
   
  // componentDidMount(){
  //   this.handleSubmit('Pewdiepie')
  // }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
    // { params: {q: searchTerm}   
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AAIzaSyB1ZAZ1XP6w0hO85HkdKtA1vqo7hIZes_A',
        q: searchTerm,         
      }
    });
    console.log(response)
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
  }


  render(){

    const { selectedVideo, videos } = this.state;

    return(
      <Grid justify="center"  container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}></VideoDetail>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}></VideoList>
            </Grid>                        
          </Grid>
        </Grid>
      </Grid>



    )
  }
}
export default App;
