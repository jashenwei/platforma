import './App.css';
import {Nav} from './components/Nav.jsx';
import {Changes} from "./pages/Changes.jsx";
import {Catalog} from "./pages/Catalog.jsx";
import  {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    return (
        <div className="App">

                <Nav/>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/changes" element={ <Changes/>} />
                    <Route path="/catalog" element={ <Catalog/> } />
                </Routes>

        </div>
    );
}

export default App;
