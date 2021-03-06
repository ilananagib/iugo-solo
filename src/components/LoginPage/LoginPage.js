import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';



const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      zip: '',
      phone: '',
      email: '',
      website: '',
      login: '',
      password: '',
      categories: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div className='mainView'>
        <div className='header'>
          <Header history={this.props.history} />
        </div>
        <div className='sideBar'>
          <SideNavBar />
        </div>
        <div className='mainContent'>
        <div className='loginContainer'>
            <img src='images/world.jpg' alt='main' className='mainImage' />
            </div>
          <div className='loginBox'>
            {this.renderAlert()}
            <form onSubmit={this.login}>
              <h1>Login</h1>
              <div>
                <label htmlFor="username">
                  Username:
              <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  Password:
              <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  name="submit"
                  value="Log In"
                />
                <Link to="/register">Register</Link>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
