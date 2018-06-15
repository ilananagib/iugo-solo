import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  menuButton: {
    marginLeft: 850,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;

  const handleLogin = (pageLink) => () => {
    props.history.push(pageLink);
}



  return (
    <div >
      <Toolbar>
        <Typography variant='title'>
          <img src='images/iugo-logo.png' onClick={handleLogin('/home')} className='logo' alt='iugo' />
        </Typography>
        <Button onClick={handleLogin('/home')} style={{ backgroundColor: '#40D797' }} className={classes.menuButton}>Login</Button>
        <Button onClick={handleLogin('/register')} style={{ backgroundColor: '#40D797' }}>Sign Up</Button>
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);


