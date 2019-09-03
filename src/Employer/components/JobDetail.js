import React, { Component } from 'react';
import logo from '../../img/admin.jpg';
import { loremIpsum } from "lorem-ipsum";
import Axios from 'axios';

export default class JobDetail extends Component {

    state =  {
        dataRes:[]

    };
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    };
   
    handleRead = () => {
        const job_id = this.props.match.params.postId;
    
        Axios.get(`http://localhost/react/api/Job/read_single.php?job_id=${job_id}`)
        .then(response => 
            
            // const response_data =[];
            // console.log(this.state.dataRes);
            // response.data.response_array.forEach(result => {
            //     let {dataValue} = this.state;
            //     dataValue.push(result)
                
            //     console.log(this.state.dataValue);

                this.setState({
                    dataRes:response.data
                })
                
                // console.log(this.state.dataRes);
            
            
                // job_id:`${result.job_id}`,
                // job_desc:`${result.job_desc}`,
                // job_title:`${result.job_title}`,
                // applicant_name:`${result.applicant_name}`,
                // email:`${result.email}`,
                // date_created:`${result.date_created}`

                
            
            )   
        
            

        .catch(error => {
            console.log(error)


        })
        
    };

    handleUpdate = () => {
        const job_id = this.props.match.params.postId;
        // const job_title = this.state.job_title;
        // const job_desc = this.state.job_desc;
        // const job_role = this.state.job_role;
        // const company = this.state.compnay;
    
        Axios.put(`https://ibad-api.herokuapp.com/api/Job/update.php?job_id=${job_id}`, {
                // 'job_title': job_title,
                // 'job_desc': job_desc,
                // 'company': company,
                'job_id':job_id,
                'job_role': this.state.job_role

                // 'attachment': attachment
    
            })
            .then(res =>
                    
                    this.props.history.push(`/employer/job`)
                    
            )
    };
    componentDidMount() { 
        // console.log(this.props.match.params.postId);
        this.handleRead();


    }

    render() {
       const data = this.state.dataRes;
        
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Job Details</h1>
                    <ol className="breadcrumb">

                        <li><a href="#"><i className="fa fa-dashboard" /> Employer</a></li>
                        <li><a href="#"><i className="fa fa-dashboard" /> Job Offer</a></li>
                        <li className="active">Job Details</li>
                    </ol>
                </section>

                <section className="content">
                    <div className="row">
                    
                        <div className="col-md-8">
                            <div className="box box-primary">

                                {/* /.box-header */}
                                
                                <div className="box-body">
                                

                                    <dl key={data.job_id} className="dl-horizontal">

                                    
                                        <dt>Job Title</dt>
                                        <dd>{data.job_title} </dd>
                                       
                                        <dt>Job Description</dt>
                                        <dd>{data.job_desc}</dd>

                                        <dt>Department</dt>
                                        <dd>Department Name here.</dd>
                                        <dt>Job Roles</dt>
                                        <dd>
                                       
                                        <div className="input-group col-md-5">
                                                
                                                <textarea type="text" name="job_role" onChange = {this.changeHandler} className="form-control">{data.job_role}</textarea>
                                            </div>
                                            <br/>
                                        </dd>

                                        <dt>Applicants Invited</dt>
                                        <dd>
                                            <div className="input-group col-md-5">
                                                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                                <input type="email" className="form-control" placeholder="Email" defaultValue={data.email} />
                                            </div>
                                            <br/>

                                        </dd>

                                        <dt>Date Created</dt>
                                        <dd>{data.date_created}</dd>
                                    
                                        <button className="btn btn-danger pull-right" onClick = {this.handleUpdate}>Change</button>
                                        
                                    </dl>
                                
                                </div>
                                
                               
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box box-primary">
                                <div className="box-body box-profile">
                                    <img className="profile-user-img img-responsive img-circle" src={logo} alt="User profile" />
                                    <h3 className="profile-username text-center">Renz LTD</h3>
                                    <p className="text-muted text-center">Trading Manufacturer</p>
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Departments</b> <a className="pull-right">1,322</a>
                                        </li>

                                    </ul>

                                </div>
                                {/* /.box-body */}
                            </div>

                        </div>


                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            {/* /.box */}
                        </div>


                    </div>
                </section>

            </div>
        )
    }
}
