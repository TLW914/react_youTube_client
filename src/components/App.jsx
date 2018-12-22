import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTermSubmit('high quality iceland videos');
    }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response);
        // console.log(response.data.items)
        this.setState({ 
            videos: response.data.items ,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        //console.log('from the App!', video); //comment shows the callback works when passed down through my props down to VideoList down to VideoItem
        this.setState( {selectedVideo: video} );
    }
    
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmission={this.onTermSubmit}/>
                {this.state.videos.length} Results
                    <div className="ui grid">
                        <div className="ui row"></div>
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <br></br>
                            <div className="five wide column">
                                <VideoList onVideoSelection={this.onVideoSelect} videos={this.state.videos}/>
                            </div>
                    </div>
            </div>
        )
    }
}

export default App;