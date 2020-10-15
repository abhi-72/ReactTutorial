import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PortalsList from './components/portalslist.component';
import AddPortal from './components/addportal.component';
import Portal from './components/portal.component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/portals"]} component={PortalsList} />
            <Route exact path="/createportal" component={AddPortal} />
            <Route path="/portals/:id" component={Portal} />
          </Switch>
        </BrowserRouter>
    </div>
  )
}



export default App;
