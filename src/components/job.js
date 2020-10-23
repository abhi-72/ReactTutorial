import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import JobDataService from '../services/job.service'

class Job extends Component {
    constructor(props) {
        super(props)
        this.retrieveJobs = this.retrieveJobs.bind(this);
        this.state = {
             jobs: null
        }
    }
    
    retrieveJobs() {
        JobDataService.getAll()
            .then(response => {
                this.setState({
                    jobs: response.data
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
                <Button 
                variant="contained" 
                color="primary" 
                onClick={this.retrieveJobs}>
                    Get jobs
                </Button>
            </div>
        )
    }
}

export default Job
