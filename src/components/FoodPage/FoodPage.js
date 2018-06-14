import React, { Component } from 'react';
import axios from 'axios';
import SideNavBar from '../SideNavBar/SideNavBar';


class FoodPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
        }
    }

        componentDidMount = () => {
            axios.get('/api/categories/4')

                .then((response) => {
                    console.log('get', response);
                    this.setState({
                        categoriesList: response.data
                    })
                })

        }
    

        render(){
            return (
                <div className=''>
                    <div >
                      
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

export default FoodPage;