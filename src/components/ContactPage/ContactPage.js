import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';



class ContactPage extends Component {

    render() {
        return (
            <div className='mainView'>
                <div className='header'>
                    <Header history={this.props.history} />
                </div>
                <div className='sideBar'>
                    <SideNavBar />
                </div>
                <div className='mainContent'>
                    <div className='contactContainer'>
                        <img src='images/iugo-icon.png' className='contactLogo' />
                        <p>Iugo is here to connect you with ressources available in your community.</p>
                        <p> For any questions, please send us an e-mail. We will contact you shortly.</p>
                        <p>iugo@iugo.com</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactPage;