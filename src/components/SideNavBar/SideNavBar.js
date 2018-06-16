import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapStateToProps = state => ({
  user: state.user,
});

const styles = theme => ({
  root: {
    maxWidth: 300,
    marginLeft: 120,
    marginTop: 80,
    color: '#40D797',
  },
});

function SideNavBar(props) {
  const { classes } = props;

//   const AddManageInfo = () => {
//   let manageInfo;
//   console.log(props);
//   if (props.user.userName !== null) {
//     let manageInfo = <ListItem button component="a" href="/user">
//       <ListItemText primary="Manage Org Info" /></ListItem>
//   }
// }



  return (
    <div className={classes.root} style={styles.paperLeft}>
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
        {/* {AddManageInfo} */}
      </List>
    </div>
  );
}

SideNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(SideNavBar));