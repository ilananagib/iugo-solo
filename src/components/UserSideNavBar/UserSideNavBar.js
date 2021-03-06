import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  root: {
    maxWidth: 300,
    margin: 70,
    color: '#40D797',
  },
});

function UserSideNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={styles.paperLeft}>
      <List component="nav">
        <ListItem button component="a" href="/user">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="/categories">
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button component="a" href="/contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component="a" href="/info">
          <ListItemText primary="Manage Info" />
        </ListItem>
      </List>
    </div>
  );
}

UserSideNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSideNavBar);