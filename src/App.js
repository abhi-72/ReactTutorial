import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PortalsList from './components/portalslist.component';
import AddPortal from './components/addportal.component';
import Portal from './components/portal.component';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        {/* <Switch>
            <Route exact path={["/", "/portals"]} component={PortalsList} />
            <Route exact path="/createportal" component={AddPortal} />
            <Route path="/portals/:id" component={Portal} />
          </Switch> */}
      </BrowserRouter>
    </div>

  )
}


export default App;
