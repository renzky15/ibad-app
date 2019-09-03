import React, { Component } from 'react';
import Axios from 'axios';
import { CardStack, Card } from 'react-cardstack';

export default class JobAcceptance extends Component {
    // Code here
    state = {
        dataValue: []
    };

    componentDidMount() {
        Axios.get(`https://ibad-api.herokuapp.com/api/Employer/JobAcceptance/read.php`)
            .then(response =>
                response.data.response_array.map(result => ({
                    job_code: `${result.job_code}`,
                    job_title: `${result.job_title}`,
                    job_desc: `${result.job_desc}`,
                    applicants: `${result.applicants}`,
                    date_created: `${result.date_created}`

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
            'margin-right': '8px',


        };

        return (

            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Manage Job Acceptance
                        </h1>

                    <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Home</li>
                        <li>Employer</li>
                        <li className="active">Job Acceptance</li>
                    </ol>
                    <br />
                    <br />

                    {/* Content */}
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-primary">
                                <div className="box-header">

                                    {/* Modal */}


                                    {/* <div className="box-tools">
                                        <div className="input-group input-group-sm hidden-xs" style={{ width: 150 }}>
                                            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
                                            <div className="input-group-btn">
                                                <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* /.box-header */}
                                <div className="box-body table-responsive no-padding">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>Job ID</th>
                                                <th>Job Title</th>
                                                <th>Job Description</th>
                                                <th>No. of Applicants</th>
                                                <th>Date Created</th>

                                                <th>Action</th>
                                            </tr>
                                            {
                                                this.state.dataValue.map((value, index) =>


                                                    <tr key={index}>

                                                        <td key={index}>{value.job_code}</td>

                                                        <td key={index}>{value.job_title}</td>

                                                        <td key={index}>{value.job_desc}</td>

                                                        <td align="center" key={index}>{value.applicants}</td>

                                                        <td key={index}>{value.date_created}</td>


                                                        {/* <td>
                                                        <NavLink to={"/employer/job/jobOffer/view/" + value.job_id}><button className="btn btn-primary btn-sm" onClick={this.handleSingleRead}>View</button></NavLink>
                                                    </td> */}
                                                        <td>
                                                            <button className="btn btn-primary btn-sm" style={spacing} data-toggle="modal" data-target="#modal-edit" ><span className="fa fa-eye"></span></button>
                                                            <button className="btn btn-danger btn-sm" onClick={(e) => this.handleDelete(value.job_code)}><span className="fa fa-times"></span></button>

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
                                                    <h4 className="modal-title">Applicants</h4>
                                                </div>
                                                <div className="modal-body">


                                                    {/* <label htmlFor="InputEmail">Email address</label> */}
                                                    <CardStack
                                                        height={250}
                                                        width={500}
                                                        background='#f8f8f8'
                                                        hoverOffset={25}>

                                                        <Card background='#2980B9'>
                                                            <h1>Number 1</h1>
                                                            <button>Click here</button>
                                                        </Card>
                                                        

                                                        <Card background='#27AE60'>
                                                            <h1>Number 2</h1>
                                                        </Card>

                                                        <Card background='#2980B9'>
                                                            <h1>Number 1</h1>
                                                        </Card>

                                                        <Card background='#27AE60'>
                                                            <h1>Number 2</h1>
                                                        </Card>

                                                    </CardStack>


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

                    {/*  Content End*/}
                </section>



            </div>
        )
    }
}
