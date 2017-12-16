import React, {Component} from 'react';
import { connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map( (book)=> {
			return (
				<li
					onClick={()=>this.props.selectBook(book)}
					key={book.title}
				    className="list-group-item">
					{book.title}
				</li>
				);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>	
			)
	}
}

function mapStateToProps(state) {
	return {
		books:state.books
	};
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch)
{
	//Whenever selectBook is called, the result should be passed 
	//to all of our reducers
	return bindActionCreators({selectBook:selectBook},dispatch);
}


//Promote BookList from a component to a container it needs to know about this new dispatch method, selectBook, Make it avaiable as prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);