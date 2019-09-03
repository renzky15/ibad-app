import React, { Component } from 'react'
import Axios from 'axios';
import { NavLink, Router, Switch, BrowserRouter } from 'react-router-dom';

export default class Job extends Component {
    state = {

        //    dataValue: {
        //        job_id:[],
        //        job_desc:[],
        //        date:[],
        //        applicant:[],
        //    },
        dataValue: [],
        id: '',
        emailForm: [],
        isLoading: true
    };
    handleRead = () => {
        // e.preventDefault();
        Axios.get('https://ibad-api.herokuapp.com/react/api/Job/read.php')
            .then(response => {
                console.log(response)
                // const response_data =[];

                response.data.response_array.forEach(result => {
                    let { dataValue } = this.state;
                    dataValue.push(result)

                    console.log(this.state.dataValue);


                });


            }).then(dataValue => {
                this.setState({
                    dataValue: dataValue

                });
            })

            .catch(error => {
                console.log(error)


            })
    };

    handleSingleRead = () => {


    };

    addEmail = (e) => {
        this.setState({
            emailForm: [...this.state.emailForm, '']
        });
    };
    handleChange = (e, index) => {
        const email = this.state.emailForm;
        email[index] = e.target.value
        this.setState({
            emailForm: this.state.emailForm
        })
        console.log(this.state.emailForm)
    };
    handleRemove = (index) => {
        this.state.emailForm.splice(index, 1)
        console.log(this.state.emailForm, '$$$$');

        // update the state
        this.setState({
            emailForm: this.state.emailForm
        })
    };
    handleDelete = (job_id) => {
        Axios.delete('https://ibad-api.herokuapp.com/react/api/Job/delete.php', {
            headers: {
                Authorization: ''
            },
            data: {
                job_code: job_id
            }
        })
        // .then(res =>
        //     // window.location.reload()

        // )
    };
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.email)
        const email = this.state.emailForm;

        // const attachment =this.state.attachment;
        // let form =  new FormData();
        // form.append('email', this.state.mailTo);
        Axios.post('https://ibad-api.herokuapp.com/api/Employer/JobOffer/sendEmail.php', {
            'email': email

            // 'attachment': attachment

        })
            .then(res =>
                console.log(res.data)

            )

    };
    refresh = () => {
        this.setState({
            dataValue: []
        })
    };

    componentDidMount() {
        // this.refresh();
        // console.log(this.state.dataValue);
        // this.handleRead();
        // console.log('Component Mounted.')

        Axios.get(`https://ibad-api.herokuapp.com/react/api/Job/read.php`)
            .then(response =>

                // const response_data =[];

                // response.data.response_array.forEach(result => {
                //     let {dataValue} = this.state;
                //     dataValue.push(result)

                //     console.log(this.state.dataValue);


                // });
                response.data.response_array.map(result => ({
                    job_id: `${result.job_id}`,
                    job_desc: `${result.job_desc}`,
                    job_title: `${result.job_title}`,
                    applicant_name: `${result.applicant_name}`,
                    date_created: `${result.date_created}`,
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
    componentDidUpdate(prevState) {
        // this.setState({
        //     dataValue: prevState.dataValue.concat(prevState.result)
        // })
        // if (this.state.dataValue !== prevState.dataValue) {
        console.log(prevState.dataValue)
        console.log(this.state.dataValue)

    }

    render() {



        return (

            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Manage Job
                        </h1>

                    <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Home</li>
                        <li>Employer</li>
                        <li className="active">Job</li>
                    </ol>
                    <br />
                    <br />

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-primary">
                                <div className="box-header">
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-default">
                                        Create Job Offer
                                </button>
                                    {/* Modal */}
                                    <div className="modal fade" id="modal-default">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                    <h4 className="modal-title">Invite Applicant</h4>
                                                </div>
                                                <div className="modal-body">


                                                    {/* <label htmlFor="InputEmail">Email address</label> */}

                                                    {

                                                        this.state.emailForm.map((email, index) => {
                                                            return (
                                                                <div key={index} className="form-group input-group">
                                                                    {/* <label htmlFor="InputEmail">Email address</label> */}
                                                                    <input type="email" onChange={(e) => this.handleChange(e, index)} name="email" value={email}
                                                                        className="form-control" placeholder="Enter email" />


                                                                    <span className="input-group-btn">
                                                                        <button type="button" onClick={() => this.handleRemove(index)} className="close" aria-label="Close">x</button>
                                                                    </span>




                                                                </div>
                                                            )
                                                        })


                                                    }

                                                    <button type="button" onClick={this.addEmail} className="btn btn-success ">Add</button>


                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                                    <button type="button" onClick={this.submitHandler} className="btn btn-primary" data-toggle="modal" data-target="#modal-success">Send <span className="fa fa-envelope-o"></span></button>
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
                                                <th>Job Code</th>
                                                <th>Job Title</th>
                                                <th>Description</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Applicants</th>
                                                <th>Action</th>
                                            </tr>
                                            {this.state.dataValue.map((value, index) =>


                                                <tr key={index}>

                                                    <td key={index}>{value.job_id}</td>

                                                    <td key={index}>{value.job_title}</td>

                                                    <td key={index}>{value.job_desc}</td>

                                                    <td key={index}>{value.date_created}</td>

                                                    <td><span className="label label-warning">Pending</span></td>

                                                    <td key={index}>{value.applicant_name}</td>

                                                    <td>
                                                        <NavLink to={"/employer/job/jobOffer/view/" + value.job_id}><button className="btn btn-primary btn-sm" onClick={this.handleSingleRead}>View</button></NavLink>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm" onClick={(e) => this.handleDelete(value.job_id)}><span className="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody></table>
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
