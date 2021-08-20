import React from "react";
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import loadable from '@loadable/component';
import ScrollToTop from "./ScrollToTop";

const Home = loadable(() => import('./Home'), {fallback: <div>Loading...</div>});
const About = loadable(() => import('./About'), {fallback: <div>Loading...</div>});
const Users = loadable(() => import('./Users'), {fallback: <div>Loading...</div>});
const Topics = loadable(() => import('./Topics'), {fallback: <div>Loading...</div>});
const NotFound = loadable(() => import('./NotFound'), {fallback: <div>Loading...</div>});

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <div className="App">
                <Container>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                {/*<Link to={{
                                    pathname: "/",
                                    search: "?sort=name",
                                    hash: "#the-hash",
                                    state: {fromDashboard: true}
                                }} className="nav-link">Home</Link>*/}
                                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={location => ({...location, pathname: "/users"})}
                                      className="nav-link">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/topics" className="nav-link"
                                      innerRef={node => console.log(node)}>Topics</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="card">
                        <div className="card-body">
                            <Switch>
                                <Redirect exact from="/" to="/home" push/>
                                <Route path="/home" component={Home}/>
                                {/*<Route path="/" exact render={({history, location, match}) => console.log("history: ", history)}/>*/}
                                <Route path="/about" component={About}/>
                                <Route path="/users"
                                       children={({history, location, match}) => <h2>Users</h2>}/>
                                <Route path="/topics" component={Topics}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Container>
            </div>
        </Router>
    );
}

export default App;
