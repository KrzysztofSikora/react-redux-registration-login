import React from 'react';
import { connect } from 'react-redux';
import { ContentsList } from "./ContentsList";
class ContentPage extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h3>Hi {user.name}!</h3>
                    <p>Content Page</p>
                    <ContentsList/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, todo } = state;
    const {user} = authentication;
    return {
        user,
        users,
        todo
    };
}

const connectedContentPage = connect(mapStateToProps)(ContentPage);
export {connectedContentPage as ContentPage};
