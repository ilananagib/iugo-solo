import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideNavBar from '../SideNavBar/SideNavBar';



function ContactPage(props) {
    const { classes } = props;
    return (
        <div className='mainView'>
        <div className='sideBar'>
         <SideNavBar />
         </div>
         <div className='mainContent'>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image="images/iugo-icon.png"
                    title="Iugo Icon"
              />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Get in Touch
                </Typography>
                    <Typography component="p">
                        Iugo is here to connect you with ressources available in your community. For any questions, please send us an e-mail. We will contact you shortly.
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                </Button>
                </CardActions>
            </Card>
        </div>
        </div>
    );
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(ContactPage);