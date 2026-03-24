import './Locations.css';
import LocationFilter from "./sub/LocationFilter/LocationFilter.jsx";
import {useEffect, useState} from "react";
import LocationBlock from "./sub/LocationBlock/LocationBlock.jsx";

export default function Locations({setLocationToDisplay}) {
    const locations=["All","University","Post Office","Government","Cafeteria","Medical"]
    const [currentFilter,setCurrentFilter] = useState("All");
    const [locationsData, setLocationsData] = useState([]);
    const [filteredLocations,setFilteredLocations] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");

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
        if(currentFilter!=="All"){
            setFilteredLocations(locationsData.filter(location=>location.category===currentFilter));
        }else{
            setFilteredLocations(locationsData);
        }
    },[currentFilter]);

    useEffect(() => {
        if(searchQuery!==""){
            setFilteredLocations(locationsData.filter(location=>location.name.includes(searchQuery)));
        }else{
            setFilteredLocations(locationsData);
        }
    },[searchQuery]);

    return <div id='locations'>
        <div id='locations-heading'>
            <span id='locations-label-1'>All locations</span>
            <span id='locations-label-2'>9 locations</span>
        </div>
        <div id='locations-nav'>
            <div id='location-nav-filter'>
            {locations.map(location=>{
                return <LocationFilter location={location} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
            })}
            </div>
            <div id='location-nav-search'>
                <div id='search-icon'>⌕</div>
                <input type='text' id='location-search-input' placeholder='Search...' onChange={(e)=>setSearchQuery(e.target.value)}/>
            </div>
        </div>
        <div id='locations-blocks'>
            {filteredLocations.map((filteredLocation,i)=>{
                return <LocationBlock location={filteredLocation} setLocationToDisplay={setLocationToDisplay}  />
            })}
        </div>
    </div>;
}
