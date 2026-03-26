import './Locations.css';
import LocationFilter from "./sub/LocationFilter/LocationFilter.jsx";
import {useEffect, useState} from "react";
import LocationBlock from "./sub/LocationBlock/LocationBlock.jsx";

export default function Locations({setLocationToDisplay,language}) {
    const locations=[
        { "pl": "Wszystkie", "en": "All" },
        { "pl": "Uniwersytet", "en": "University" },
        { "pl": "Poczta", "en": "Post Office" },
        { "pl": "Urząd", "en": "Government" },
        { "pl": "Stołówka", "en": "Cafeteria" },
        { "pl": "Medyczne", "en": "Medical" }
    ]
    const [currentFilter,setCurrentFilter] = useState(language==="pl" ? "Wszystkie" : "All");
    const [locationsData, setLocationsData] = useState([]);
    const [filteredLocations,setFilteredLocations] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");

    useEffect(() => {
        if(currentFilter==="All" && language==="pl"){
            setCurrentFilter("Wszystkie");
        }
        if(currentFilter==="Wszystkie" && language==="en"){
            setCurrentFilter("All");
        }
    }, [language]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data.json')
            const data = await response.json();
            setLocationsData(data);
            setFilteredLocations(data);
        }
        fetchData();
    },[])

    useEffect(() => {
        if(currentFilter!=="All" && currentFilter!=="Wszystkie"){
            setFilteredLocations(locationsData.filter(location=>location.category[language]===currentFilter));
        }else{
            setFilteredLocations(locationsData);
        }
    },[currentFilter]);

    useEffect(() => {
        if(searchQuery!==""){
            setFilteredLocations(locationsData.filter(location=>location.name[language].includes(searchQuery)));
        }else{
            setFilteredLocations(locationsData);
        }
    },[searchQuery]);

    return <div id='locations'>
        <div id='locations-heading'>
            <span id='locations-label-1'>{language==="en" ? "All locations" : "Wszystkie lokalizacje"}</span>
            <span id='locations-label-2'>{language==="en" ? "9 locations" : "9 lokalizacji"}</span>
        </div>
        <div id='locations-nav'>
            <div id='location-nav-filter'>
            {locations.map(location=>{
                return <LocationFilter location={location[language]} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
            })}
            </div>
            <div id='location-nav-search'>
                <div id='search-icon'>⌕</div>
                <input type='text' id='location-search-input' placeholder={language==="en" ? 'Search...' : "Szukaj..."} onChange={(e)=>setSearchQuery(e.target.value)}/>
            </div>
        </div>
        <div id='locations-blocks'>
            {filteredLocations.map((filteredLocation,i)=>{
                return <LocationBlock location={filteredLocation} setLocationToDisplay={setLocationToDisplay} language={language} />
            })}
        </div>
    </div>;
}
