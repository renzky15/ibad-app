import React, { Component } from 'react';
// import OrgCharts from '@latticehr/react-org-chart';
import sampleOrgChart from 'orgchart';

// import sampleOrgChart from 'orgchart';
export default class OrgChart extends Component {
shouldComponentUpdate(){
    return false;
}
componentDidMount() {
    
//    this.org_chart = new OrgCharts(this.refs.org_chart,{
//         'tree': { "id": 1, "person": { "name": "Fouad Matin" }, "children": [] },
//         'nodeWidth':180,
//         'nodeHeight':100,
//         'nodeSpacing':12,
//         'animationDuration':350
//     });
}

    render() {
        const props = {
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
              children: []
            },
            loadChildren: d => {
              // this could also just be `return tree.children`
            //   return Promise.resolve(tree.children)
            },
            lineType: 'curve'
          }
        return (
            <div></div>
        )
    }
}
