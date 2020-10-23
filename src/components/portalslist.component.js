import React, { Component } from 'react'
import PortalDataService from '../services/portal.service'
// import { Link } from "react-router-dom"
import { Button, List, ListItem, ListItemText } from '@material-ui/core';

class PortalsList extends Component {
    constructor(props) {
        super(props);
        this.retrievePortals = this.retrievePortals.bind(this);
        this.setActivePortal = this.setActivePortal.bind(this);
        this.nextPath = this.nextPath.bind(this);
        this.state = {
            portals: [],
            currentportal: null,
            // currentindex: -1
        }
    }

    componentDidMount() {
        this.retrievePortals();
    }

    retrievePortals() {
        PortalDataService.getAll()
            .then(response => {
                this.setState({
                    portals: response.data
                })
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    setActivePortal(portal, index) {
        this.setState({
            currentportal: portal,
            currentindex: index
        })
        this.props.history.push("/portals/"+ portal.id)
        console.log(portal)
    }

    nextPath(path) {
        this.props.history.push(path);
      }

    render() {
        const { portals } = this.state
        console.log(portals)
        return (
            <List component="nav" aria-label="secondary mailbox folders">
                {
                    portals &&
                    portals.map((portal, index) => (
                        <ListItem button
                            onClick={() => this.setActivePortal(portal, index)}
                            key={index}
                        >
                            <ListItemText primary={portal.job_portal}/>

                            {/* <Link to={"/portals/" + portal.id}
                            >{portal.job_portal}</Link> */}
                        </ListItem>
                    ))
                }
                <Button variant="contained" color="primary" onClick={() => this.nextPath('/createportal') }>
                    Create
                </Button>
            </List>
        )
    }
}

export default PortalsList

