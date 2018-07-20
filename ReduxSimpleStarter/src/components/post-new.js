import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="catagories"
                    label="Catagories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate() {

    
}

export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(PostNew);
