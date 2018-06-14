import React from 'react';
// import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  // menuButton: {
  //   marginLeft: 650,
  //   marginRight: 20,
  };


function Header(props) {
  const { classes } = props;
  return (
    <div className='mainView'>
      <Toolbar>
        <Typography variant='title'>
          <img src='images/iugo-logo.png' className='logo' alt='iugo' />
        </Typography>
        <div className='loginButton'>
        <Button style={{ backgroundColor: '#40D797' }}>Login</Button>
        </div>
        <div className='signButton'>
        <Button style={{ backgroundColor: '#40D797' }}>Sign Up</Button>
        </div>
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);


