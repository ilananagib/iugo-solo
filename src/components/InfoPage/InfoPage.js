import React, { Component } from 'react';
import { connect } from 'react-redux';


import { USER_ACTIONS } from '../../redux/actions/userActions';
import FormPage from '../FormPage/FormPage';


const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
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
      <div>
      <div >
          <FormPage />
      </div>
      <div className='mainContent'>
      <div>
        { content }
      </div>
      </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
