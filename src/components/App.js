import './App.scss';

import {Container} from 'react-bootstrap';
import Home from "./Home";
import About from "./About";
import Users from "./Users";

function App() {
    return (
        <div className="App">
            <Container>
                <Home/>
                <About/>
                <Users/>
            </Container>
        </div>
    );
}

export default App;
