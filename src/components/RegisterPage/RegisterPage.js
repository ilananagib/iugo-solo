import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      zipcode: '',
      phone: '',
      email: '',
      website: '',
      username: '',
      password: '',
      message: '',
      categories: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        zipcode: this.state.zipcode,
        phone: this.state.phone,
        email: this.state.email,
        website: this.state.website,
        username: this.state.username,
        password: this.state.password,
        categories: this.state.categories,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <FormControl>
              <InputLabel htmlFor="name">
              Organization:</InputLabel>
              <Input
                id="name"
                value={this.state.name}
                onChange={this.handleInputChangeFor('name')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="address">
                Address:</InputLabel>
              <Input
                id="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="city">
                City:</InputLabel>
              <Input
                id="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="zipcode">
                ZipCode:</InputLabel>
              <Input
                id="zipcode"
                value={this.state.zipcode}
                onChange={this.handleInputChangeFor('zipcode')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="phone">
                Phone Number:</InputLabel>
              <Input
                id="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="email">
                E-mail:</InputLabel>
              <Input
                id="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="website">
                Website:</InputLabel>
              <Input
                id="website"
                value={this.state.website}
                onChange={this.handleInputChangeFor('website')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl >
              <InputLabel htmlFor="categories">
                Categories:</InputLabel>
              <Select
                value={this.state.categories}
                onChange={this.handleInputChangeFor('categories')}
                inputProps={{
                  name: 'categories',
                  id: 'categories',
                }}
              >
                <MenuItem value="">
                  <em>Categories</em>
                </MenuItem>
                <MenuItem value={1}>Healthcare</MenuItem>
                <MenuItem value={2}>Support Groups</MenuItem>
                <MenuItem value={3}>Housing/Shelter</MenuItem>
                <MenuItem value={4}>Food Pantries</MenuItem>
                <MenuItem value={5}>Education</MenuItem>
                <MenuItem value={6}>Career Advancement</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="username">
                Username:</InputLabel>
              <Input
                id="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="password">
                Password:</InputLabel>
              <Input
                id="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </FormControl>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/home">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

