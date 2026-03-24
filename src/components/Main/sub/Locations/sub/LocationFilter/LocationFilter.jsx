import './LocationFilter.css';

export default function LocationFilter({location, currentFilter, setCurrentFilter}) {
    return <div className={`location-filter ${location===currentFilter ? 'location-filter--active' : ''}`}
    onClick={() => setCurrentFilter(location)}>
        {location}
    </div>;
}
