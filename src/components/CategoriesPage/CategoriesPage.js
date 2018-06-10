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
        axios.get('/api/categories/${categories_id}')
        
            .then((response) => {
                console.log('get', response);
                this.setState({
                    categoriesList: response.data
                })
            })
    
}

render() {
    return (
        <div>
            <h1>Categories</h1>
            <div>
    <button onClick={this.props.getCategories}></button>
</div>
            <ul>
                {this.state.categoriesList.map(categories => {
                    return (
                        <li key={categories.id}>{`${categories.name} ${categories.address} ${categories.city} ${categories.zipcode} ${categories.phone} ${categories.email} ${categories.website}`}</li>
                    )
                })}
            </ul>
        </div>
    )

};
}


export default connect()(CategoriesPage);