import React from 'react';
import {connect} from 'react-redux';
import {UserList} from './UserList'

class HomePage extends React.Component {
    render() {
        return (<div className='row justify-content-md-center'>
                <UserList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication, contents} = state;
    const {user} = authentication;
    return {
        user,
        users,
        contents

    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};
