import './Header.css';

export default function Header() {
    return <header>
        <div id='queue-sense-logo'>
            <span id='queue-sense-logo-pt-1'>Queue</span>
            <span id='queue-sense-logo-pt-2'>Sense</span>
        </div>
        <div id='header-navbar'>
            <a href='#locations'>Locations</a>
            <a id='add-report-bttn-header' href='#add-report-container'>Add a report</a>
        </div>
    </header>;
}
