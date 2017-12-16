import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBbgZXCkn1HAyL7x-VoVBOzqokKMLPrtcY';

// Create new components HTML
// Show page in the DOM
// ES6  () => {} equal to function () {}

//the most parent componet should fetch the data
//const App = () => { return (<div> <SearchBar /> </div>)}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos : [],
			selectVideo:null
		};
		this.videoSearch('music');
														// this.setState({videos:videos})
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term:term},(videos)=>{this.setState({
			videos:videos,
			selectVideo:videos[0]
		})});
	}
	render(){ 
		const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)

		return (
		<div> 
			<SearchBar onSearchTermChange={videoSearch}/> 
			<VideoDetail video = {this.state.selectVideo} />
			<VideoList
				onVideoSelect= {selectVideo=>this.setState({selectVideo})} 
			videos={this.state.videos} />
		</div>
		)
	}
}

//Take the components in the DOM
//jsx would be changed by the webpack and babel

ReactDOM.render(<App />, document.querySelector('.container'));