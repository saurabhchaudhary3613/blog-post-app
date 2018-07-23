import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createPost } from '../actions';
import { connect } from 'react-redux';

class PostNew extends Component {
    renderField(field) {
        //const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

        const { meta } = field;
        const className = `form-group ${
            meta.touched && meta.error ? 'has-danger' : ''
        }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        );
    }
    onSubmit(values) {
        //this === component
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btm-primary">
                    Submit
                </button>
                <Link className="btn btn-danger" to="/posts/index">
                    cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
    //console.log(values); -> {title: '', catagories: '', content: ''}
    const errors = {};

    // validate the inputs from 'values'

    if (!values.title) {
        errors.title = 'Enter a title !';
    }
    if (!values.categories) {
        errors.categories = 'Enter a categories !';
    }
    if (!values.content) {
        errors.content = 'Enter a content !';
    }

    // If error is empty, the form is fine to submit
    // If error has *any* properties, redux from assumes form is invalid
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(
    connect(
        null,
        { createPost }
    )(PostNew)
);
