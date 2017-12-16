import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';


import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import reducers from './reducers';
//be careful, this line would transform the promise to be a object
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//Switch component would only match the the path in ** order ** 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path= "/posts/new" component={PostsNew} />
        <Route path= "/posts/:id" component={PostsShow} />
        <Route path= "/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
