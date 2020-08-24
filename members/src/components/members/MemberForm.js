import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class MemberForm extends Component {
    renderError ({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />

                {this.renderError(meta)}
            </div>
        );
    };

    renderCheckbox= ({ input, label }) => {
        input.value = input.checked.toString();
        console.log(input)
        return (
            <div className="ui checkbox">
                <input type="checkbox" { ...input } />
                <label>{label}</label>
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <div className="field">
                    <Field name="email" type="text" component={this.renderInput} label="Enter Email" />
                </div>
                <div className="field">
                    <Field type="checkbox" name="is_registered" component={this.renderCheckbox} label="Regisered" />
                </div>
                <button className="ui button primary">Submit</button>
                <Link to="/" className="ui button">Cancel</Link>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
        errors.email = "You must enter an email";
    }

    return errors;
};

export default reduxForm({ form: 'memberForm', validate })(MemberForm);
