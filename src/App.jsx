import './App.css'
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {useState} from "react";
import Modal from "./components/Main/sub/Modal/Modal.jsx";

function App() {
    const [locationToDisplay, setLocationToDisplay] = useState(null);
    const [language,setLanguage] = useState("pl");

    return <div className='App'>
        <Header language={language} setLanguage={setLanguage}/>
        <Main setLocationToDisplay={setLocationToDisplay} language={language}/>
        <Footer/>
        {locationToDisplay!==null && <Modal locationToDisplay={locationToDisplay} setLocationToDisplay={setLocationToDisplay} language={language}/>}
    </div>;

}

export default App
