import React, { Component } from 'react';
import axios from 'axios';
import SideNavBar from '../SideNavBar/SideNavBar';


class CareerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
        }
    }

        componentDidMount = () => {
            axios.get('/api/categories/6')

                .then((response) => {
                    console.log('get', response);
                    this.setState({
                        categoriesList: response.data
                    })
                })

        }
    

        render(){
            return (
                <div className='mainView'>
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

export default CareerPage;