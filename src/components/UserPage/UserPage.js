import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';
import UserSideNavBar from '../UserSideNavBar/UserSideNavBar';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className='userWelcome'>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div className='mainView'>
      <div className='header'>
          <Header history={this.props.history} />
      </div>
      <div className='sideBar'>
          <UserSideNavBar />
      </div>
      <div className='mainContent'>
      <div className='userContainer'>
            <img src='images/world.jpg' alt='main' className='mainImage' />
            </div>
            {content}
          </div>
        </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

