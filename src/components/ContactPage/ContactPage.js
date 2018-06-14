import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideNavBar from '../SideNavBar/SideNavBar';



class ContactPage extends Component {

    render() {
        return (
            <div>
                <div className='sideBar'>
                    <SideNavBar />
                </div>
                <div className='mainContent'>
            <div classname='logo'>
                    <img src='images/iugo-icon.png' width='120'/>
                    </div>
                    <div className='content'>
                            Iugo is here to connect you with ressources available in your community. For any questions, please send us an e-mail. We will contact you shortly.
                   </div>
                    </div>
                </div>
        
        )
    }
}
export default ContactPage;