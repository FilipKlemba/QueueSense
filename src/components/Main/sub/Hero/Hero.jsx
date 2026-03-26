import './Hero.css';
import StatisticBlock from "./sub/StatisticBlock/StatisticBlock.jsx";

export default function Hero({language}) {

    const statistics = [
        {
            value: 3,
            subTitle: {
                pl: "Krótka kolejka obecnie",
                en: "Short queue right now"
            },
            title: {
                pl: "Krótkie kolejki",
                en: "Short queues"
            },
            color: "green"
        },
        {
            value: "19min",
            subTitle: {
                pl: "we wszystkich lokalizacjach",
                en: "across all locations"
            },
            title: {
                pl: "Średni czas oczekiwania",
                en: "Average wait"
            },
            color: "orange"
        },
        {
            value: 3,
            subTitle: {
                pl: "oczekiwane opóźnienia",
                en: "expected delays"
            },
            title: {
                pl: "Długie kolejki",
                en: "Long queues"
            },
            color: "red"
        },
        {
            value: 45,
            subTitle: {
                pl: "w ciągu ostatniej godziny",
                en: "in the last hour"
            },
            title: {
                pl: "Zgłoszenia dzisiaj",
                en: "Reports today"
            },
            color: "blue"
        }
    ];

    const translations = [{
        pl: "AKTUALNE DATE · AKTUALIZOWANE CO MINUTE",
        en: "LIVE DATA · UPDATED EVERY MINUTE"
    },
        {
            pl:"Sprawdź aktualne czasy oczekiwania na pocztach, w punktach obsługi uczelni, stołówkach i urzędach — dzięki użytkownikom takim jak Ty.\n",
            en:"Check real-time waiting times at post offices, university counters, cafeterias and government offices — powered by people like you."
        },
        {
            pl:"Przeglądaj lokalizacje",
            en:"Browse locations"
        },
        {
            pl:"Dodaj raport →",
            en:"Submit a report →"
        }
    ]

    return <div id="hero">
        <div id="hero-left">
            <span className='hero-title'>{translations[0][language]}</span>
            {language === "en" ? <h1 className='hero-label-left-1'>Know before <br></br>
                you
                <span className='hero-label-left-1-green'> go</span>
            </h1> :
                <h1 className='hero-label-left-1'>Sprawdź zanim <br></br><span className='hero-label-left-1-green'>pójdziesz</span></h1>}
                <span id='hero-label-left-2'>{translations[1][language]}</span>
                <div id='hero-left-nav'>
                    <a href='#locations' id='hero-nav-bttn-1'>{translations[2][language]}</a>
                    <a href='#add-report-container' id='hero-nav-bttn-2'>{translations[3][language]}</a>
                </div>
            </div>
                <div id="hero-right">
            {statistics.map(stat => {
                return <StatisticBlock language={language} statistic={stat}/>
        })}
    </div>
</div>
}
