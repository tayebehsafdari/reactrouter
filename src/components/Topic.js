import React from "react";
import {useParams} from 'react-router-dom';

function Topic() {
    let {topicId} = useParams();
    return <h3 className="link-danger">Requested topic ID: <span className="link-success">{topicId}</span></h3>;
}

export default Topic;