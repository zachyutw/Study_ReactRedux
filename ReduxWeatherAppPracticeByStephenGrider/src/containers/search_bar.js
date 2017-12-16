//When users call the forms would call the action creator, the container need to auto connect to action creator

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }
    onInputChange(event){
        
        this.setState({term:event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        //we need to go fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});

    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" >
                <input placeholder="Get a five day forecast in ur favorite cities" className="form-control" value={this.state.term} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit </button>
                </span>
            </form>
        )
    }
}

function mapDispatchtoProps(dispatch){
    //will return a action
    return bindActionCreators({fetchWeather},dispatch);
}
//connect() first handle new state, second handle aciton or function
export default connect(null, mapDispatchtoProps)(SearchBar);