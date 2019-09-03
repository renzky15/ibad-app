import React, { Component } from 'react';
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class Settings extends Component {
    state = {
        department_name: []


    };
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    };
    handleAdd = (e) => {
        this.setState({
            department_name: [...this.state.department_name, '']

        });

    };
    deptChange = (e, index) => {
        const dept_name = this.state.department_name;
        dept_name[index] = e.target.value

        this.setState({
            department_name: this.state.department_name
        });
        console.log(this.state.department_name)
    };
    handleRemove = (index) => {
        this.state.department_name.splice(index, 1)
        console.log(this.state.department_name, '$$$$');

        // update the state
        this.setState({
            department_name: this.state.department_name
        })
    };

    handlePost = (e) => {
        e.preventDefault();
        const { company_name, business_num, mission, vision, address } = this.state;

        Axios.post('https://ibad-api.herokuapp.com/api/Employer/Settings/companyPost.php', {
            company_name,
            business_num,
            mission,
            vision,
            address
        })
            .then(res =>
                console.log(res.data)

            )
    };
    insertDepartment = (e) => {
        e.preventDefault();
        const  dept_name  = this.state.department_name
        dept_name.forEach(dept_name => {
            Axios.post('https://ibad-api.herokuapp.com/api/Employer/Settings/departmentPost.php', {
                dept_name:dept_name
        })
            .then(res =>
                console.log(res.data)

            )
        });

        
    };

    
    submit = () => {
        confirmAlert({
            title: 'Job Submit',
            message: 'Are you sure to submit.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.handlePost
                },
                {
                    label: 'No'

                }
            ]
        });
    };
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Company Settings</h1>
                    <ol className="breadcrumb">

                        <li><a href="#"><i className="fa fa-user" /> Employer</a></li>

                        <li className="active">Company Settings</li>
                    </ol>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-6">

                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Company Details</h3>
                                </div>


                                <div className="box-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="company_name">Company Name</label>
                                            <input type="text" onChange={this.changeHandler} className="form-control" name="company_name" placeholder="Enter Company Name" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="company_name">Business No./ Permit</label>
                                            <input type="text" onChange={this.changeHandler} className="form-control" name="business_num" placeholder="Business No." />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="Missiont">Mission</label>
                                            <textarea onChange={this.changeHandler} className="form-control" name="mission" placeholder="Mission" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="vision">Vision</label>
                                            <textarea onChange={this.changeHandler} className="form-control" name="vision" placeholder="Vision" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="vision">Address</label>
                                            <textarea onChange={this.changeHandler} className="form-control" name="address" placeholder="Company Address" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="company">Company logo</label>
                                            <input type="file" id="logo" />
                                            <p className="help-block">Choose .png, .jpg or .svg file.</p>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Check me out
      </label>
                                        </div>
                                    </form>
                                </div>
                                {/* /.box-body */}
                                <div className="box-footer">
                                    <button onClick={this.submit} className="btn btn-primary">Submit</button>
                                </div>




                            </div>

                            {/* /.box */}
                        </div>


                        <div className="col-md-6">

                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Departments</h3>
                                </div>


                                <div className="box-body">
                                    {
                                        this.state.department_name.map((name, index) => {
                                            return (
                                                <div className="form-group input-group" key={index}>
                                                    <label htmlFor="exampleInputEmail1">Department Name</label>
                                                    <input type="text" onChange={(e) => this.deptChange(e, index)} className="form-control" name="dept_name" value={name} id="dept_name" placeholder="Department Name" />
                                                    <span className="input-group-btn">
                                                        <button type="button" onClick={() => this.handleRemove(index)} className="close" aria-label="Close"> x</button>
                                                    </span>
                                                </div>
                                            )

                                        })
                                    }

                                    {/* {
                                        this.state.dept_in_charge.map((person, index) => {
                                            return (
                                            <div className="form-group" key = {index}>
                                                <label htmlFor="exampleInputEmail1">Departmet In Charge</label>
                                                <select className = "form-control" name = "person_in_charge" placeholder = "Select">
                                                <option>Select</option>
                                                </select>
                                            </div>
                                            )
                                        })
                                    } */}


                                    <button className="btn btn-success" onClick={this.handleAdd} >Add Department</button>
                                </div>
                                {/* /.box-body */}
                                <div className="box-footer">
                                    <button onClick = {this.insertDepartment} className="btn btn-primary pull-right">Create</button>
                                </div>


                            </div>
                        </div>

                        {/* /.box */}
                    </div>



                </section>

            </div>
        )
    }
}
