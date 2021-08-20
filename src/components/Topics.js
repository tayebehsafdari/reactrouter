import React from "react";
import {
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useRouteMatch
} from 'react-router-dom';
import Topic from "./Topic";

function Topics(props) { // {history, location, match}
    let history = useHistory();
    let location = useLocation();
    let match = useRouteMatch();
    console.log("props: ", props);
    console.log("history: ", history);
    console.log("location: ", location);
    console.log("match: ", match);
    return (
        <div>
            <h2>Topics</h2>
            <ul className="list-group">
                <li className="list-group-item list-group-item-primary">
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li className="list-group-item list-group-item-secondary">
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`} component={Topic}/>
                <Route path={`${match.path}`}>
                    <h3 className="link-warning">Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

export default Topics;