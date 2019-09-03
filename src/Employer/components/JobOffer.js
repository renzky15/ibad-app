import React, { Component } from 'react';
import Axios from 'axios';


export default class JobOffer extends Component {

    state = {
        job_title:'',
        job_desc:'',
        company:'',
        job_role:''
    
    };
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    
    };
    
    handleSubmit = () => {
    
        const job_title = this.state.job_title;
        const job_desc = this.state.job_desc;
        const job_role = this.state.job_role;
        const company = this.state.compnay;
    
        Axios.post('https://ibad-api.herokuapp.com/react/api/Employer/JobOffer/create.php', {
                'job_title': job_title,
                'job_desc': job_desc,
                'company': company,
                'job_role': job_role
                // 'attachment': attachment
    
            })
            .then(res =>
                    
                    this.props.history.push('/employer/job')
                    
            )
    };

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Create Job Offer</h1>
                    <ol className="breadcrumb">

                        <li><a href="#"><i className="fa fa-dashboard" /> Employer</a></li>
                        <li><a href="#"><i className="fa fa-dashboard" /> Job</a></li>
                        <li className="active">Job Offer</li>
                    </ol>
                </section>


                <section className="content">
                    <div className="row">

                        <div className="col-md-4">
                            <form role="form">
                                <div className="box-body">
                                    {/* Company Name */}
 
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Company Name:</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeHandler} name="company" placeholder="Company Name" />
                                    </div>
                                    {/* Job Title */}

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Job Title:</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeHandler} name="job_title" placeholder="Job Title" />
                                    </div>
                                    {/* Job Description */}

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Job Description:</label>
                                        <input type="textarea" className="form-control" id="exampleInputEmail1" onChange={this.changeHandler} name="job_desc" placeholder="Job Description" />
                                    </div>


                                </div>

                            </form>


                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}

                    <section className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box box-info">
                                    <div className="box-header">
                                        <h3 className="box-title">
                                        Job Roles
          
                                        </h3>
                                        {/* tools box */}
                                        <div className="pull-right box-tools">
                                            <button type="button" className="btn btn-info btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                <i className="fa fa-minus" /></button>
                                            <button type="button" className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                                                <i className="fa fa-times" /></button>
                                        </div>
                                        {/* /. tools */}
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body pad">
                                        <form>
                                            <textarea id="editor1" onChange={this.changeHandler} name="job_role" rows={10} cols={80}  placeholder="List the Job Roles" />
                                        </form>
                                    </div>
                                </div>
                                {/* /.box */}
                                
                            </div>
                            {/* /.col*/}
                        </div>
                        {/* ./row */}
                    </section>

                    <button className="margin-right-xl btn btn-success btn-lg" onClick = {this.handleSubmit}>Create Job</button>

                </section>


            </div> //end
        )
    }
}
