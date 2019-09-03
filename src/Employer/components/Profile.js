import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

import { loremIpsum } from 'lorem-ipsum';
import  './style.css';
import OrgCharts from '@keymastervn/react-org-chart-next';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import Axios from 'axios';

// import OrgChart from 'orgchart';
// import OrgChartsss from '../components/OrgChart';
export default class Profile extends Component {


    state = {


        'position': [],
        'department': [],
        'employee': [],
        'visibility': false,
        'buttonVisibility': true,
        'dataValue': [],
        'selectedOption':'',
        'value':''




    };

    toggleVisibilitity = (prevState) => {
        this.setState({
            visibility: !this.state.visibility,
            // email:'',
            // password:''
            buttonVisibility: !this.state.buttonVisibility
        });


    };

    addInput = (e) => {
        this.setState({
            position: [...this.state.position, ''],
            employee: [...this.state.employee, '']
        });
    };

    change = (event) => {
        this.setState({value: event.target.value});
    };
    handleChange = (e, index) => {
        const position = this.state.department;
        position[index] = e.target.value
        this.setState({
            selectedOption: this.state.department.undefined
        })
        // console.log(this.state.position)
    };

    orgChart = () => {
        // let datascource = {
        //     'id': '1',
        //     'name': 'Su Miao',
        //     'title': 'department manager',
        //     'relationship': '111',
        //     'children': [
        //       { 'id': '2','name': 'Tie Hua', 'title': 'senior engineer', 'relationship': '110' },
        //       { 'id': '3','name': 'Hei Hei', 'title': 'senior engineer', 'relationship': '111' }
        //     ]
        //   }

        // let orgchart = new OrgChart({
        //     'chartContainer': '#chart-container',
        //     'data' : datascource,
        //     'depth': 2,
        //     'nodeContent': 'title',
        //     'exportButton': true,
        //     'exportFilename': 'MyOrgChart'
        //     });

        //     return orgchart


        // const orgchart = new OrgChart({
        //     'tree':tree
        // });

        // return orgchart
    };

    
    componentDidMount() {

        Axios.get(`https://ibad-api.herokuapp.com/api/Employer/Profile/readOrg.php`)
            .then(response =>

                response.data.response_array.map(result => ({
                    org_id: `${result.org_id}`,
                    date: `${result.date}`,
                    first_name: `${result.firstName}`,
                    last_name: `${result.lastName}`,
                    full_name: `${result.firstName} ${result.lastName}`,
                    position: `${result.position}`,
                    dept_name: `${result.dept_name}`,
                    dept_in_charge: `${result.dept_in_charge}`,
                }))


            ).then(dataValue => {
                this.setState({
                    dataValue,
                    'position': dataValue.map((position) => position.position),
                    'department': dataValue.map((dept) => dept.dept_name),
                    'employee': dataValue.map((employee) => employee.full_name)

                })
            })

            .catch(error => {
                console.log(error)


            })
            

    }
    componentDidUpdate() {
       
    }
    render() {
        
        const data = {
            tree: {
              id: 1,
              person: {
                id: 1,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/spbroma/128.jpg',
                department: '',
                name: 'Imelda Haley',
                title: 'CEO',
                totalReports: 5
              },
              hasChild: true,
              children: ['sdfsd','dsfsdf']
            },
            
            lineType: 'curve'
          };


        const justify = {
            'text-align': 'justify'
        }
        const initechOrg = {
            name: this.state.employee+" -CEO",
            title: "CEO",
            department: '',
            
            children: [
                {
                    name: "Peter Gibbons",
                    actor: "Department Head",
                    children: [
                        {
                            name: "And More!!",
                            actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
                        }
                    ]
                },
                {
                    name: "Milton Waddams",
                    actor: "Department Head"
                },
                {
                    name: "Bob Slydell",
                    actor: "Department Head"
                },
                {
                    name: "Bob Slydell",
                    actor: "Department Head"
                },
            ]
        };
        const MyNodeComponent = ({ node }) => {
            return (
                <div className="initechNode" onClick={() => alert("Hi my real name is: " + node.actor)}> {node.name} </div>);
        }
       

        const hide = {
            'display': this.state.buttonVisibility ? "block" : "none"
        }
        
        // Filter duplicates
        const department = this.state.department.filter((val,id,array) => array.indexOf(val) === id);
        const employee = this.state.employee.filter((val,id,array) => array.indexOf(val) === id);
       console.log(this.state.value)
       
       
        
        return (
            
            
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Company Profile
    </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="#">Employer</a></li>
                            <li className="active">Company profile</li>
                        </ol>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-md-3">
                                {/* Profile Image */}
                                <div className="box box-primary">
                                    <div className="box-body box-profile">
                                        <img className="profile-user-img img-responsive img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
                                        <h3 className="profile-username text-center">Renz LTD</h3>
                                        <p className="text-muted text-center">Trading Manufacturer</p>
                                        <ul className="list-group list-group-unbordered">
                                            <li className="list-group-item">
                                                <b>Employees</b> <a className="pull-right">1,322</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Following</b> <a className="pull-right">543</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Friends</b> <a className="pull-right">13,287</a>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                {/* About Me Box */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">About Me</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <strong><i className="fa fa-book margin-r-5" /> Education</strong>
                                        <p className="text-muted">
                                            B.S. in Computer Science from the University of Tennessee at Knoxville
            </p>
                                        <hr />
                                        <strong><i className="fa fa-map-marker margin-r-5" /> Location</strong>
                                        <p className="text-muted">Malibu, California</p>


                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-9">
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#activity" data-toggle="tab">Activity</a></li>
                                        <li><a href="#org_chart" data-toggle="tab">Organizational Chart</a></li>
                                        <li><a href="#about" data-toggle="tab">About</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            {/* Post */}

                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="org_chart">
                                            {/* The org_chart */}
                                            {/* {this.orgChart()}
                                             */}
                                             {/* <OrgCharts tree={treee} lineType="angle"  style={{ cursor: 'move', height: '100%', width: '100%' }} /> */}
                                            <div id="root">
                                                <h1 className="container">Organizational Chart</h1>

                                                
                                               <div id = "initechOrgChart">
                                                    <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
                                               </div>
                                                
                                                

                                                <a href="#org_chart"><button onClick={this.toggleVisibilitity} style={hide} type="button" className="btn btn-success">
                                                    Create Organizational Chart
                                                </button></a>
                                                {/* Modal */}


                                                {
                                                    this.state.visibility && (
                                                    <div id="org_chart">

                                                        

                                                            
                                                                    <div className="row">

                                                                        <div className="col-md-4">

                                                                            <div className="form-group">

                                                                                <label>Department</label>
                                                                                
                                                                                <select onChange={(e,index) => this.handleChange(e,index)} name="department" value = {this.state.selectedOption} className="form-control">
                                                                                {
                                                                                    
                                                                                    
                                                                                       department.map((dept,index) => 
                                                                                        <option key = {index} >{dept}</option>
                                                                                    
                                                                                        )} 
                                                                                </select>
                                                                                
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label>Employee</label>

                                                                                <select onChange={(e) => this.change(e)} name="employee" value = {this.state.value} className="form-control">
                                                                                { 
                                                                                    employee.map((employee,index) =>
                                                                                    <option key = {index}>{employee}</option>
                                                                                )}
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label>Position</label>
                                                                                <select className="form-control">
                                                                                    <option>option 1</option>
                                                                                    <option>option 2</option>
                                                                                    <option>option 3</option>
                                                                                    <option>option 4</option>
                                                                                    <option>option 5</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>



                                                                    </div>
                                                        <button className="btn btn-success" onClick={this.addInput}>Add</button>

                                                    </div>

                                                )}


                                            </div>


                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="about">
                                            <dl className="dl-horizontal">


                                                <dt>Mission</dt>
                                                <dd style={justify}> {loremIpsum({ count: 7 })}</dd>
                                                <br />

                                                <dt>Vision</dt>
                                                <dd style={justify}>{loremIpsum({ count: 7 })}</dd>


                                            </dl>
                                        </div>
                                        {/* /.tab-pane */}
                                    </div>
                                    {/* /.tab-content */}
                                </div>
                                {/* /.nav-tabs-custom */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                <div className="control-sidebar-bg">

                </div>


            </div>
        )
    }
}
