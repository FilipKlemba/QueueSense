import './Header.css';

export default function Header({language,setLanguage}) {
    const translations = [{
        pl:"Lokalizacje",
        en:"Locations"
    },
        {
            pl:"Dodaj raport",
            en:"Add a report"
        }]

    return <header>
        <div id='queue-sense-logo'>
            <span id='queue-sense-logo-pt-1'>Queue</span>
            <span id='queue-sense-logo-pt-2'>Sense</span>
        </div>
        <div id='header-navbar'>
            <div className='flag-bttn' onClick={()=>setLanguage("pl")}>
                <img src="/pl.svg" />
            </div>
            <div className='flag-bttn' onClick={()=>setLanguage("en")}>
                <img src="/gb.svg" />
            </div>
            <a href='#locations'>{translations[0][language]}</a>
            <a id='add-report-bttn-header' href='#add-report-container'>{translations[1][language]}</a>
        </div>
    </header>;
}
