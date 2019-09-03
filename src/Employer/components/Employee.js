import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
// import FormInput from 'react-input-validation';

export default class Employee extends Component {
    state = {
        dataValue: [],
        dataRes:[]



    };

    changeHandler = (e) => {
        this.setState({

            [e.target.name]: e.target.value

        })
        console.log(this.state)
    };
    submitHandler = (e) => {
        const { first_name, last_name, position, address, email } = this.state;
        if (first_name && last_name === ""){
            alert('Please input all necessary fields.');
        }else {

        Axios.post('https://ibad-api.herokuapp.com/api/Employer/Employee/post.php', {
            'first_name': first_name,
            'last_name': last_name,
            'position': position,
            'address': address,
            'email': email
            // 'attachment': attachment
        })
        .then(res =>
            
            this.props.history.push(`/employer/employee`)
        )
        this.setState({
            first_name:'',
            last_name:'',
            position:'',
            address:'',
            email:''
        });

    

        }

    };
    handleSingleRead = (id) => {
        // const job_id = this.props.match.params.postId;
    
        Axios.get(`https://ibad-api.herokuapp.com/api/Employer/Employee/readSingle.php?e_id=${id}`)
        .then(response => {
            
            this.setState({
                dataRes:response.data.response_array
            })
           
            
        }

        )
        .catch(error => {
            console.log(error)


        })
        // console.log(this.state.dataRes);
    };
    refreshPage = () => {
        // if (prevState.dataRes[0].e_id !== this.state.dataRes[0].e_id) {
        //     this.handleSingleRead(this.state.dataRes[0].e_id);
        try {
            
            this.setState({
                dataRes:[]
            })
            
        } catch (error) {
            
        }
        
        
        // }
        
    };

    handleDelete = (e_id) => {
        Axios.delete('https://ibad-api.herokuapp.com/api/Employer/Employee/delete.php', {
            headers: {
                Authorization: ''
            },
            data: {
                e_id: e_id
            }
        })
        .then(res =>
            window.location.reload()

        )
    };
    updateHandler = (e, e_id) => {
        e.preventDefault();
        let firstName;
        if (this.state.first_name === undefined){
            firstName = this.state.dataRes.firstName
        }else {
            firstName = this.state.first_name
        }
        const employee = {
            e_id:e_id,
            test: firstName
        }
        Axios.put(`https://ibad-api.herokuapp.com/api/Employer/Employee/update.php/${e_id}`, employee
                // 'job_title': job_title,
                // 'job_desc': job_desc,
                // 'company': company,
                



                // 'attachment': attachment
    
            ).then(response =>
                console.log(response)
                )
    };

    componentDidMount() {
        Axios.get(`https://ibad-api.herokuapp.com/api/Employer/Employee/read.php`)
            .then(response =>
                response.data.response_array.map(result => ({
                    e_id: `${result.e_id}`,
                    firstName: `${result.firstName}`,
                    lastName: `${result.lastName}`,
                    position: `${result.position}`,
                    email: `${result.email}`,
                    address: `${result.address}`
                }))


            ).then(dataValue => {
                this.setState({
                    dataValue

                })
            })

            .catch(error => {
                console.log(error)


            })
    }
    
    render() {
        const spacing = {
            'margin-right': '8px'
        };

        console.log(this.state.first_name);
        return (
            

            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Manage Job
                        </h1>

                    <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Home</li>
                        <li>Employer</li>
                        <li className="active">Employee</li>
                    </ol>
                    <br />
                    <br />

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-primary">
                                <div className="box-header">
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-default">
                                        Add Employee
                                </button>
                                    {/* Modal */}
                                    <div className="modal fade" id="modal-default">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                    <h4 className="modal-title">Add Employee</h4>
                                                </div>
                                                <div className="modal-body">


                                                    {/* <label htmlFor="InputEmail">Email address</label> */}
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="company_name">First Name</label>
                                                            <input type="text" onChange={this.changeHandler} className="form-control" value = {this.state.first_name} name="first_name" placeholder="First Name" required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="company_name">Last Name</label>
                                                            <input type="text" onChange={this.changeHandler} className="form-control" value = {this.state.last_name} name="last_name" placeholder="Last Name" required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="company_name">Position</label>
                                                            <input type="text" onChange={this.changeHandler} className="form-control" value = {this.state.position} name="position" placeholder="Position" required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="company_name">Address</label>
                                                            <input type="text" onChange={this.changeHandler} className="form-control" value = {this.state.address} name="address" placeholder="Address" required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="company_name">Email</label>
                                                            <input type="text" onChange={this.changeHandler} className="form-control" value = {this.state.email} name="email" placeholder="Email" required />
                                                        </div>
                                                    </form>





                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                                    <button type="button" onClick={this.submitHandler} className="btn btn-primary" data-dismiss = "modal">Add</button>
                                                </div>
                                            </div>
                                            {/* /.modal-content */}
                                        </div>
                                        {/* /.modal-dialog */}
                                    </div>

                                    {/* /.modal */}

                                    <div className="jobOffer modal fade" id="modal-success">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                    <h4 className="modal-title">Email Sent.</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Click OK to redirect to creation of Job Offer.</p>


                                                </div>
                                                <div className="modal-footer">
                                                    <NavLink to="/employer/job/jobOffer/create"><button type="button" className="btn btn-primary close">OK</button></NavLink>
                                                </div>
                                            </div>
                                            {/* /.modal-content */}
                                        </div>
                                        {/* /.modal-dialog */}
                                    </div>


                                    {/* End of Modal */}

                                    <div className="box-tools">
                                        <div className="input-group input-group-sm hidden-xs" style={{ width: 150 }}>
                                            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
                                            <div className="input-group-btn">
                                                <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body table-responsive no-padding">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>Employee ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Position</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                            {
                                                this.state.dataValue.map((value, index) =>


                                                <tr key={index}>

                                                    <td key={index}>{value.e_id}</td>

                                                    <td key={index}>{value.firstName}</td>

                                                    <td key={index}>{value.lastName}</td>

                                                    <td key={index}>{value.position}</td>

                                                    <td key={index}>{value.address}</td>

                                                    <td key={index}>{value.email}</td>

                                                    {/* <td>
                                                        <NavLink to={"/employer/job/jobOffer/view/" + value.job_id}><button className="btn btn-primary btn-sm" onClick={this.handleSingleRead}>View</button></NavLink>
                                                    </td> */}
                                                    <td>
                                                        <button className="btn btn-primary btn-sm" style = {spacing} onClick = {(e) => this.handleSingleRead(value.e_id)} data-toggle="modal" data-target="#modal-edit" ><span className="fa fa-edit"></span></button>
                                                        <button className="btn btn-danger btn-sm" onClick={(e) => this.handleDelete(value.e_id)}><span className="fa fa-times"></span></button>
                                                        
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                        </table>

                                        <div className="modal fade" id="modal-edit">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                    <h4 className="modal-title">Edit Employee Details</h4>
                                                </div>
                                                <div className="modal-body">


                                                    {/* <label htmlFor="InputEmail">Email address</label> */}
                                                   

                                                        
                                                        {
                                                            this.state.dataRes.map((response, index) => 
                                                            
                                                            <div>
                                                            <div className="form-group" key = {index}>
                                                                <label htmlFor="company_name">First Name</label>
                                                                <input type="text" onChange={this.changeHandler} className="form-control" defaultValue = {response.firstName} name="first_name" placeholder="First Name" required />
                                                            </div>

                                                            <div className="form-group" key = {index}>
                                                                <label htmlFor="company_name">Last Name</label>
                                                                <input type="text" onChange={this.changeHandler} className="form-control" defaultValue = {response.lastName} name="last_name" placeholder="Last Name" required />
                                                            </div>

                                                            <div className="form-group" key = {index}>
                                                                <label htmlFor="company_name">Position</label>
                                                                <input type="text" onChange={this.changeHandler} className="form-control" defaultValue = {response.position} name="position" placeholder="Position" required />
                                                            </div>

                                                            <div className="form-group" key = {index}>
                                                                <label htmlFor="company_name">Address</label>
                                                                <input type="text" onChange={this.changeHandler} className="form-control" defaultValue = {response.address} name="address" placeholder="Address" required />
                                                            </div>

                                                            <div className="form-group" key = {index}>
                                                                <label htmlFor="company_name">Email</label>
                                                                <input type="text" onChange={this.changeHandler} className="form-control" defaultValue = {response.email} name="email" placeholder="Email" required />
                                                            </div>

                                                            <button type="button" className="btn btn-default pull-left" onClick = {this.refreshPage} data-dismiss="modal">Close</button>
                                                            <button type="button" onClick={(e) => this.updateHandler(e, response.e_id)} className="btn btn-danger mr-5" data-dismiss = "modal"><span className="fa fa-save"></span> Save</button>
                                                            </div> 

                                                            )
                                                        } 
                                                        



                                                      
                                                </div>
                                                
                                            </div>
                                            {/* /.modal-content */}
                                        </div>
                                        {/* /.modal-dialog */}
                                    </div>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                    </div>

                </section>
            </div>

        )
    }
}
