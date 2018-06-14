import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//   user: state.user,
// });

const styles = theme => ({
  root: {
    // maxWidth: 300,
    // margin: 70,
    color: '#40D797',
  },
});

function SideNavBar(props) {
//   let manageInfo;
//   console.log(props);
//   if (props.user.userName !== null){
// let manageInfo = <ListItem button component="a" href="/">
// <ListItemText primary="Home" /></ListItem>
//   }
  
  
  const { classes } = props;
  return (
    <div className="navBar" >
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
        {/* {manageInfo} */}
      </List>
    </div>
  );
}

SideNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavBar);