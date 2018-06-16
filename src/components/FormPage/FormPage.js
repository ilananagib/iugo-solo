import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { triggerLogout } from '../../redux/actions/loginActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';
import UserSideNavBar from '../UserSideNavBar/UserSideNavBar';
import swal from 'sweetalert';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formTable: [],
        }
    }
    componentDidMount() {
        this.getOrgInfo();
    }

    getOrgInfo = (id) => {
        console.log('id', id)
        axios.get(`/api/organizations/${id}`)

            .then((response) => {
                this.setState({
                    formTable: response.data
                })
                console.log('this.state.formTable', this.state.formTable);
            }).catch((error) => {
                console.log('Error on GET', error);
            });
    }



    deleteForm = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this account? This action cannot be undone.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Deleted", {
                        icon: "success",
                    });

                    axios({
                        method: 'DELETE',
                        url: `/api/organizations/${id}`,
                    }).then((response) => {
                        console.log('response', response);
                        this.props.dispatch(triggerLogout());
                    }).catch((error) => {
                        console.log(error);
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Organization Name</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell numeric>Zipcode</TableCell>
                                <TableCell numeric>Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Website</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.formTable.map(form => {
                                return (
                                    <TableRow key={form.id}>
                                        <TableCell numeric>{form.name}</TableCell>
                                        <TableCell numeric>{form.address}</TableCell>
                                        <TableCell numeric>{form.city}</TableCell>
                                        <TableCell>{form.zipcode}</TableCell>
                                        <TableCell>{form.phone}</TableCell>
                                        <TableCell>{form.email}</TableCell>
                                        <TableCell>{form.website}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => this.deleteForm(form.id)}>Delete Account</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(FormPage);