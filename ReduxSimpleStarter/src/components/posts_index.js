import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';


class PostsIndex extends Component {
    //react life cycle
    componentDidMount(){
        //call reduxCreater to fetch data from server
        
        this.props.fetchPosts();
    }

    renderPosts() {
       return _.map(this.props.posts, (post,i) =>{
           return (
            <li className="list-group-item" key={i}>
               <Link to={`/posts/${post.id}`}>{post.title}</Link> 
            </li>
           );
       });
    }

    render(){
        
       
        return (
        <div>
            <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                    Add a Post
                </Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
        </div>
    );
    }
}
//asuming to modify application state
function mapStateToProps(state) {
    //console.log(fetchPosts);
    return {posts: state.posts };
}

//we don't pass the mapStateToProps to connect, so first use null
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);