import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchMember, deleteMember } from '../../actions';


class MemberDelete extends Component {
    componentDidMount() {
        this.props.fetchMember(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <Fragment>
                <button onClick={() => this.props.deleteMember(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        );
    }

    renderContent() {
        if (!this.props.member) {
            return "Are you sure you want to delete this member?";
        }

        return `Are you sure you want to delete the member with email address ${this.props.member.email}?`;
    }

    render() {
        return (
            <Modal 
                title = "Delete Member"
                content = {this.renderContent()}
                actions = {this.renderActions()}
                onDismiss = {() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { member: state.members[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchMember, deleteMember })(MemberDelete);
