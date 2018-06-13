import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import SideNavBar from '../SideNavBar/SideNavBar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const styles = {
    card: {
        width: 150,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
}

function CategoriesPage (props) {
    
    const handleClick = (pageLink) => () => {
        props.history.push(pageLink);
    }

    const { classes } = props;
    return (
        <div className='mainView'>
            <div className='sideBar'>
                <SideNavBar />
            </div>
            <div className='mainContent'>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/healthcare.png"
                        title="Healthcare" />
                    <CardActions>
                        <Button onClick={handleClick('/healthcare')} size="small" color="primary">
                            Healthcare
            </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/support.png"
                        title="Support" />
                    <CardActions>
                        <Button onClick={handleClick('/support')} size="small" color="primary">
                            Support Groups
            </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/housing.png"
                        title="Housing" />
                    <CardActions>
                        <Button onClick={handleClick('/housing')} size="small" color="primary">
                            Housing and Shelter
            </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/food.png"
                        title="Food Pantries" />
                    <CardActions>
                        <Button onClick={handleClick('/food')} size="small" color="primary">
                            Food Pantries
            </Button>
                    </CardActions>
                </Card>


                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/education.png"
                        title="Education" />
                    <CardActions>
                        <Button onClick={handleClick('/education')} size="small" color="primary">
                            Education
            </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/career.png"
                        title="Career" />
                    <CardActions>
                        <Button onClick={handleClick('/career')} size="small" color="primary">
                            Career Training
            </Button>
                    </CardActions>
                </Card>


            </div>
        </div>
    );
}



CategoriesPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoriesPage);
