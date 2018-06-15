import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';


class EducationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
        }
    }

    componentDidMount = () => {
        axios.get('/api/categories/5')

            .then((response) => {
                console.log('get', response);
                this.setState({
                    categoriesList: response.data
                })
            })

    }


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
                        <ul>
                            {this.state.categoriesList.map(categories => {
                                return (
                                    <li key={categories.id}>{`${categories.name} ${categories.address} ${categories.city} ${categories.zipcode} ${categories.phone} ${categories.email} ${categories.website}`}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
        );
    }
}

export default EducationPage;