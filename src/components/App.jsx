import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    onTermSubmit = (term) => {

    }
    
    render(){
        return (
            <div className="ui container">
            <SearchBar onFormSubmission={this.onTermSubmit}/>
            </div>
        )
    }
}

export default App;