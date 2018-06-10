import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class CategoriesPage extends Component {
    constructor() {
        super();
        this.state = {
            categoriesList: [],
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        axios.get(`/api/categories`)
        
            .then((response) => {
                // console.log('get', response);
                this.setState({
                    categoriesList: response.data
                })
            })
    
    // axios({
    //     method: 'GET',
    //     url: '/api/categories',
    //     data: 1,
    // }).then((response) => {
    //     this.setState({
    //         categoriesList: response.data,
    //     });
    //     console.log(this.state.categoriesList);
    // }).catch((error) => {
    //     console.log('Error on GET', error);
    // })
}

render() {
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {this.state.categoriesList.map(categories => {
                    return (
                        <li key={categories.id}>{`${categories.name} ${categories.address}`}</li>
                    )
                })}
            </ul>
        </div>
    )

};
}


export default connect()(CategoriesPage);