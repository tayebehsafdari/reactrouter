import React from "react";

function Home(props) {

    function handleClick() {
        props.history.push({
            pathname: "/somewhere",
            search: "?some=search-string",
            hash: "#howdy",
            state: {userDefined: true}
        });
    }

    return <h2 onClick={handleClick}>Home</h2>;
}

export default Home;