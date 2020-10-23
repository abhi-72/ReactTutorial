import { FormControl, Button, MenuItem, Select, TextField, makeStyles } from '@material-ui/core';
import React, { Component } from 'react'
import PortalDataService from '../services/portal.service'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));


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
            company_id: ""
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
        const classes = this.useStyles()
        return (
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
                <Button size="medium" variant="contained" color="primary" onClick={this.updatePortal}>
                    Update
                        </Button>
            </FormControl>
        );
    }
}



export default Portal
