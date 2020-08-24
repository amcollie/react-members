import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import MemberCreate from './members/MemberCreate';
import MemberDelete from './members/MemberDelete';
import MemberEdit from './members/MemberEdit';
import MemberList from './members/MemberList';
import Header from './Header';
import history from '../history';

export default () => {
    return (
    <div className="ui container">
        <Router history={history}>
            <Fragment>
                <Header />
                <Switch>
                    <Route path='/' exact component={MemberList} />
                    <Route path="/members/new" exact component={MemberCreate} />
                    <Route path="/members/edit/:id" exact component={MemberEdit} />
                    <Route path="/members/delete/:id" exact component={MemberDelete} />
                </Switch>
            </Fragment>
        </Router>
    </div>);
};