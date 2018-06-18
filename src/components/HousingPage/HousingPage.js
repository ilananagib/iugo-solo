import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';


class HousingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
        }
    }

    componentDidMount = () => {
        axios.get('/api/categories/3')

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
                                    <p className='categoriesResults' key={categories.id}>
                                    <h2>{categories.name}</h2>
                                    <p><strong>Address:</strong> {categories.address} - {categories.city} - {categories.zipcode}</p>
                                    <p><strong>Website:</strong> {categories.website}</p>
                                    <p><strong>E-mail:</strong> {categories.email}</p> 
                                    <p><strong>Phone Number:</strong> {categories.phone}</p></p>
                                )
                            })}
                        </ul>
                    </div>
                </div>
        );
    }
}

export default HousingPage;