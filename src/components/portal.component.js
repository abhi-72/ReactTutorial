import React, { Component } from 'react'
import PortalDataService from '../services/portal.service'

class Portal extends Component {
    constructor(props) {
        super(props)
        this.getPortal = this.getPortal.bind(this);
        this.onChangeJobPortal = this.onChangeJobPortal.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.updatePortal = this.updatePortal.bind(this);
        this.state = {
            id: null,
            job_portal: "",
            status: ""
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

    updatePortal() {
        var data = {
            job_portal: this.state.job_portal,
            status: this.state.status
        }
        PortalDataService.update(this.props.match.params.id, data)
            .then(response => { console.log(data) })
            .catch(error => { console.log(error) })
    }

    getPortal(id) {
        PortalDataService.get(id)
            .then(response => {
                this.setState({
                    job_portal: response.data.job_portal,
                    status: response.data.status
                })
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                {/* // <div className="edit-form"> */}
                <div>
                    <h4>Job Portal</h4>
                    <form>
                        {/* <div className="form-group"> */}
                        <div>
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
                            <input
                                type="text"
                                // className="form-control"
                                id="status"
                                value={this.state.status}
                                onChange={this.onChangeStatus}
                            />
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
