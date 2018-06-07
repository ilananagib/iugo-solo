import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SideNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button component="a" href="/">
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
      </List>
    </div>
  );
}

SideNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavBar);