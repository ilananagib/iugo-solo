import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

class SideNavBar extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState({ open: !this.state.open });
    };

    handleClose = event => {
        if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <MenuList>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Categories</MenuItem>
                        <MenuItem>Contact Us</MenuItem>
                    </MenuList>
                </Paper>
                <Manager>
                    
                        <div
                            ref={node => {
                                this.target1 = node;
                            }}
                        >
                            <Button
                                aria-owns={open ? 'menu-list-grow' : null}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                            >
                            </Button>
                        </div>
                   
                </Manager>
              </div >
           
        );
    

    SideNavBar.propTypes = {
        classes: PropTypes.object.isRequired,
    };

}

}

export default withStyles(styles)(SideNavBar);