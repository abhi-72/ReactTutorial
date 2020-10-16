import { FormControl, InputLabel, Button, MenuItem, Select, TextField, makeStyles } from '@material-ui/core'
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
    this.newPortal = this.newPortal.bind(this)
    this.state = {
      id: null,
      job_portal: "",
      status: "A",
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

  newPortal() {
    this.setState({
      job_portal: "",
      status: "A",
      company_id: companies[0].id,
      submitted: false
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
  useStyles() {
    return makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
    }));
  }

  render() {
    const classes = this.useStyles()
    return (
      <div>
        {this.state.submitted ? (
          <FormControl className={classes.formControl} noValidate autoComplete="off">
            <h4>You have submitted successfully!</h4>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              onClick={this.newPortal}
            >
              Add another
            </Button>
          </FormControl>
        ) : (
            <FormControl className={classes.formControl} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                name="portal"
                label="Job portal"
                value={this.state.job_portal}
                onChange={this.onChangeJobPortal} />
              {/* <InputLabel id="demo-simple-select-label" name="status">Status</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                value={this.state.status}
                onChange={this.onChangeStatus}
              >
                <MenuItem value={"A"}>Active</MenuItem>
                <MenuItem value={"I"}>Inactive</MenuItem>
              </Select>
              {/* <InputLabel id="demo-simple-select-label" name="company">Company</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="company"
                value={this.state.company_id}
                onChange={this.onChangeCompany}
              >
                {
                  companies &&
                  companies.map(company => (
                    <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
                  ))
                }
              </Select>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={this.createPortal}
              >
                Save
              </Button>
            </FormControl>
          )}
      </div>
    );
  }
}


export default AddPortal
