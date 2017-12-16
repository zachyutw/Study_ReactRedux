import React, {Component} from 'react';


//ES6 functional componet
// const SearchBar = ()=> { return (<input />);}
//ES6 class basic component

//the state object change, each component would rerender componet
// this.state is a new object

class SearchBar extends Component {
	constructor (props) {
		super(props);
		this.state= { term:''};
	}
	
	render() {
	   return (
	   <div className = "search-bar">
	   <input value = {this.state.term} onChange= {(event) => this.onInputChange(event.target.value)} /> <br />
	    </div>
   		)

	}

	onInputChange(term) {
		this.setState({ term});
		this.props.onSearchTermChange(term);
	}
	//name event handler properly on somthing action
	
}

export default SearchBar;