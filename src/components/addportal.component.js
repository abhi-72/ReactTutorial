import React, { Component } from 'react'
import PortalDataService from '../services/portal.service'

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

class AddPortal extends Component {
  constructor(props) {
    super(props)
    this.onChangeJobportal = this.onChangeJobportal.bind(this)
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.createPortal = this.createPortal.bind(this)
    this.onChangeCompany = this.onChangeCompany.bind(this)
    this.state = {
      id: null,
      job_portal: "",
      status: "",
      company_id: companies[0].id,
      submitted: false
    }
  }

  onChangeJobportal(e) {
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

  createPortal() {
    var data = {
      job_portal: this.state.job_portal,
      status: this.state.status,
      company_id: parseInt(this.state.company_id)
    }
    PortalDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          job_portal: response.data.job_portal,
          company_id: response.data.company_id,
          submitted: true
        })
        console.log(response.data)
      })
      .catch(error => { console.log(error) })
  }

  render() {
    return (
      //   <div className="submit-form">
      <div>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            {/* <button className="btn btn-success" onClick={this.newTutorial}> */}
            <button onClick={this.newTutorial}>
              Add
                </button>
          </div>
        ) : (
            <div>
              {/* <div className="form-group"> */}
              <div>
                <label htmlFor="jobportal">Job Portal</label>
                <input
                  type="text"
                  // className="form-control"
                  id="jobportal"
                  required
                  value={this.state.job_portal}
                  onChange={this.onChangeJobportal}
                  name="jobportal"
                />
              </div>

              {/* <div className="form-group"> */}
              <div>
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  // className="form-control"
                  id="status"
                  required
                  value={this.state.status}
                  onChange={this.onChangeStatus}
                  name="status"
                />
              </div>
              <div>
                <label>Company: </label>
                <select onChange={this.onChangeCompany}>
                  {
                    companies &&
                    companies.map(company => (
                      <option key={company.id} value={company.id}>{company.name}</option>
                    ))
                  }
                </select>
              </div>

              {/* <button onClick={this.saveTutorial} className="btn btn-success"> */}
              <button onClick={this.createPortal} >
                Save
                </button>
            </div>
          )}
      </div>
    );
  }
}


export default AddPortal
