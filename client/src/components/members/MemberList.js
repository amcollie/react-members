import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMembers } from '../../actions';

class MemberList extends Component {
    componentDidMount() {
        this.props.fetchMembers();
    }

    renderAdmin(member) {
        return (
            <div className="right floated content">
                <Link to={`/members/edit/${member.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/members/delete/${member.id}`} className="ui button negative">
                    Delete
                </Link>
            </div>
        );
    }

    renderList() {
        return this.props.members.map(member => {
            return (
                <div className="item" key={member.id}>
                    {this.renderAdmin(member)}
                    <div className="content">
                        <Link to={`/members/edit/${member.id}`} className="header">{member.email}</Link>
                        <div className="description">{member.is_registered ? "Registered" : "Not Registered"}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/members/new" className="ui button primary">
                    Create Member
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div>
            <h2>Members List</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        members: Object.values(state.members)
    };
};

export default connect(mapStateToProps, { fetchMembers })(MemberList);
