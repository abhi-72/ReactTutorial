import React, { Component } from 'react'
import PortalDataService from '../services/portal.service'

class Portal extends Component {
    constructor(props) {
        super(props)
        this.getPortal = this.getPortal.bind(this);
        this.onChangeJobPortal = this.onChangeJobPortal.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.updatePortal = this.updatePortal.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.state = {
            id: null,
            job_portal: "",
            status: "",
            company_id : null
        }
    }

    componentDidMount() {
        this.getPortal(this.props.match.params.id)
    }

    onChangeJobPortal(e) {
        this.setState({
            job_portal: e.target.value
        })
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }
    onChangeCompany(e) {
        this.setState({
            company_id: e.target.value
        })
    }

    updatePortal() {
        var data = {
            job_portal: this.state.job_portal,
            status: this.state.status,
            company_id: parseInt(this.state.company_id)
        }
        // console.log(data)
        PortalDataService.update(this.props.match.params.id, data)
            .then(response => { console.log(data) })
            .catch(error => { console.log(error) })
    }

    getPortal(id) {
        PortalDataService.get(id)
            .then(response => {
                this.setState({
                    job_portal: response.data.job_portal,
                    status: response.data.status,
                    company_id: response.data.company_id
                })
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        var companies = [
            {
                "id": 1,
                "name": "Company1"
            },
            {
                "id": 2,
                "name": "Company2"
            },
        ]
        return (
            <div>
                {/* // <div className="edit-form"> */}
                <div>
                    <h4>Job Portal</h4>
                    <form>
                        {/* <div className="form-group"> */}
                        <div>
                            <span>Name: </span>
                            {/* <label htmlFor="title">Name</label> */}
                            <input
                                type="text"
                                // className="form-control"
                                id="jobportal"
                                value={this.state.job_portal}
                                onChange={this.onChangeJobPortal}
                            />
                        </div>
                        {/* <div className="form-group"> */}
                        <div>
                            {/* <label htmlFor="description">Description</label> */}
                            <span>Status: </span>
                            <input
                                type="text"
                                // className="form-control"
                                id="status"
                                value={this.state.status}
                                onChange={this.onChangeStatus}
                            />
                        </div>
                        <div>
                            <label>Company: </label>
                            <select onChange={this.onChangeCompany} value={this.state.company_id} >
                                {
                                    companies &&
                                    companies.map(company => (    
                                    <option key={company.id} value={company.id}>{company.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </form>
                    <button
                        type="submit"
                        // className="badge badge-success"
                        onClick={this.updatePortal}
                    >
                        Update
                </button>
                    {/* <p>{this.state.message}</p> */}
                </div>
            </div>
        );
    }
}



export default Portal
