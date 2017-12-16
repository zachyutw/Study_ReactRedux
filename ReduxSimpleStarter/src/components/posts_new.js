import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component{
    
    //reduxForm three state 1.  
    renderField(field){
        const {meta: {touched,error}} = field;
        const className = `form-group ${touched && error ? 'has-danger':''}`;
        return (<div className={className}>
            <label>{field.label}</label>
            <input className="form-control" type="text" {...field.input}/>
            <div className="text-help">
            {touched ? error:''}
            </div>
        </div>)
    }

    onSubmit(values){
        //navigate to index page
        
        this.props.createPost(values,()=>{this.props.history.push('/');});
    }


    
    render(){
        const {handleSubmit} =this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="contents" label="Post Content" component={this.renderField} />  
               <button type="submit" className="btn btn-primary" >Submit</button>  
               <Link to="/"  className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    //Validate the inputs from 'values'
    if(!values.title) {
        errors.title = "Enter a title!";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if(!values.contents) {
        errors.contents = "Enter some content please!";
    }

    //If erros has *any* properties, redux form assumes form is invalid
    //If errors is empty, the form is fine to submit
    return errors;
}

export default reduxForm(
    {
        validate,
        form: 'PostsNewForm'
    })( 
        connect(null,{createPost})(PostsNew)
    );