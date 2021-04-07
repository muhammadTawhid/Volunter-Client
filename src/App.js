import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import AddEvents from "./components/AddEvent/AddEvents";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";


function App() {
  return (
    
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">AddEvents</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addEvents">
            <AddEvents />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
