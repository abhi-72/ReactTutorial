import React, { Component } from 'react'
import PortalDataService from '../services/portal.service'
import { Link } from "react-router-dom"

class PortalsList extends Component {
    constructor(props) {
        super(props);
        this.retrievePortals = this.retrievePortals.bind(this);
        this.setActivePortal = this.setActivePortal.bind(this);
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
        console.log(portal)
    }

    render() {
        const { portals } = this.state
        console.log(portals)
        return (
            <div>
                {
                    portals &&
                    portals.map((portal, index) => (
                        <div
                            // className={index === currentindex ? "active" : ""}
                            onClick={() => this.setActivePortal(portal, index)}
                            key={index}
                        >
                            <Link to={"/portals/" + portal.id}
                            >{portal.job_portal}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default PortalsList

