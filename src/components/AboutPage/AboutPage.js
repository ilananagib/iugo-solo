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
                    <div className='aboutContainer'>
                        <img src='images/world.jpg' alt='hands' className='aboutImage' />
                        <div className='overlay'>
                            <div className='aboutText'>
                                <p>Everyone, regardless of immigration status, should have access to basic needs such as healthcare, housing and food.</p>
                                <p> Iugo was created to help you get connected to resources available in our communities.</p>
                                <p> In this website, you will find a list of organizations providing support to immigrant families living in the United States.</p>
                                <p> You are not alone. We are here for you! </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default AboutPage;