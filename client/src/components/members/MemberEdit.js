import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMember, editMember } from '../../actions';
import MemberForm from './MemberForm';

class MemberEdit extends Component {
    componentDidMount() {
        this.props.fetchMember(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editMember(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.member) return <div>Loading...</div>;

        return (
            <div>
                <h3>Edit Member</h3>
                <MemberForm 
                    initialValues={ _.pick(this.props.member, 'email', 'is_registered')}
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {member: state.members[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchMember, editMember })(MemberEdit);