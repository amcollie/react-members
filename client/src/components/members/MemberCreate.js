import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createMember } from '../../actions';
import MemberForm from './MemberForm';

class MemberCreate extends Component {
    onSubmit = formValues => {
        this.props.createMember(formValues);
    };

    render() {
        return (
            <div>
                <h3>Enter Member</h3>
                <MemberForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createMember })(MemberCreate);