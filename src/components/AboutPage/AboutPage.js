import React, { Component } from 'react';
import './AboutPage.css';
import SideNavBar from '../SideNavBar/SideNavBar';


class AboutPage extends Component{
    render(){
        return(
            <div className='mainView'>
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