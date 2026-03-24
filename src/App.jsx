import './App.css'
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {useState} from "react";
import Modal from "./components/Main/sub/Modal/Modal.jsx";

function App() {
    const [locationToDisplay, setLocationToDisplay] = useState(null);
    return <div className='App'>
        <Header/>
        <Main setLocationToDisplay={setLocationToDisplay} />
        <Footer/>
        {locationToDisplay!==null && <Modal locationToDisplay={locationToDisplay} setLocationToDisplay={setLocationToDisplay} />}
    </div>;

}

export default App
