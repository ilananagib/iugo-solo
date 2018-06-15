import React, { Component } from 'react';
import './AboutPage.css';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';


class AboutPage extends Component {
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
                        About Page is connected!
            </div>
                </div>
        );
    }
}

export default AboutPage;