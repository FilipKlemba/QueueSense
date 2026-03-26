import './LocationBlock.css';
import QueueIndicator from "./sub/QueueIndicator/QueueIndicator.jsx";

export default function LocationBlock({ location, setLocationToDisplay, language }) {

    const COLOR_MAP = {
        short: 'green',
        medium: 'orange',
        long: 'red'
    };

    const LABEL_MAP = {
        short: { pl: "Krótka", en: "Short" },
        medium: { pl: "Średnia", en: "Medium" },
        long: { pl: "Długa", en: "Long" }
    };

    const calculateEstimatedTime = () => {
        if (!location.reports.length) return 0;

        const total = location.reports.reduce((acc, report) => acc + report.time, 0);
        return Math.round(total / location.reports.length);
    };

    const estimatedTime = calculateEstimatedTime();
    const timePercentage = (estimatedTime / 60) * 100;

    const getTimeBracket = () => {
        if (timePercentage <= 30) return 'short';
        if (timePercentage <= 60) return 'medium';
        return 'long';
    };

    const bracket = getTimeBracket();

    const queueMeta = {
        color: COLOR_MAP[bracket],
        label: LABEL_MAP[bracket][language]
    };

    return (
        <div className="location-block" onClick={() => setLocationToDisplay(location)}>
            <div className="location-block-top">
                <div className='location-block-icon'>
                    {location.icon}
                </div>

                <QueueIndicator type={queueMeta.label} language={language}/>
            </div>

            <span className='location-block-title'>
                {location.name[language]}
            </span>

            <span className='location-block-category'>
                {location.category[language]}
            </span>

            <span className='location-block-time-estimated'>
                <span className='estimated-time'>
                    {estimatedTime}
                </span>
                <span className='estimated-time-label'>
                    {language === "en" ? " min estimated" : " min szacowanych"}
                </span>
            </span>

            <div className='location-block-time-bar-wrapper'>
                <div
                    className='location-block-time-bar'
                    style={{
                        width: `${timePercentage}%`,
                        backgroundColor: queueMeta.color
                    }}
                />
                <div className='location-block-time-bar-threshold'></div>
            </div>

            <div className='location-block-bottom'>
                <span className='location-block-recent-reports'>
                    {location.reports.length} {language === "en" ? "recent reports" : "niedawnych zgłoszeń"}
                </span>

                <button className='location-block-details-bttn'>
                    {language === "en" ? "View details →" : "Sprawdź szczegóły →"}
                </button>
            </div>
        </div>
    );
}