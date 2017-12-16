import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
//read reducer from books

const rootReducer = combineReducers({
	//directly mapping the application state property
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
