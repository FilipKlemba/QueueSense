import './Main.css';
import Hero from "./sub/Hero/Hero.jsx";
import Locations from "./sub/Locations/Locations.jsx";
import AddReport from "./sub/AddReport/AddReport.jsx";

export default function Main({setLocationToDisplay}) {


    return <main>
        <Hero />
        <Locations setLocationToDisplay={setLocationToDisplay}/>
        <AddReport />
    </main>;
}
