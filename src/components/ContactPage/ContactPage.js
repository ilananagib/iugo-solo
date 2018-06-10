import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        maxWidth: 100,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

function ContactPage(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={styles.card}>
                <CardMedia
                    className={styles.media}
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
                    <Button size="small" color="primary">
                        Learn More
                </Button>
                </CardActions>
            </Card>
        </div>
    );
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ContactPage;