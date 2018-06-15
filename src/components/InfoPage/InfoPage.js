import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';
import FormPage from '../FormPage/FormPage';


const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>

        </div>
      );
    }

    return (
      <div className='mainView'>
        <div className='header'>
          <Header history={this.props.history} />
        </div>
        <div className='sideBar'>
          <SideNavBar />
        </div>
        <div className='mainContent'>
          {content}
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
