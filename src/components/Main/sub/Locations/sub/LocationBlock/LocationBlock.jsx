import './LocationBlock.css';
import QueueIndicator from "./sub/QueueIndicator/QueueIndicator.jsx";

export default function LocationBlock({location,setLocationToDisplay}) {


    const calculateEstimatedTime = () => {
        let estimatedTime = 0;
        location.reports.forEach(report => {
            estimatedTime += report.time;
        })
        return estimatedTime / location.reports.length;
    }

    const getTimePercentage = () => (calculateEstimatedTime() / 60) * 100;

    const getTimeBracket = () => {
        const time = getTimePercentage();
        if (time <= 30) return 'short';
        if (time <= 60) return 'medium';
        return 'long';
    };

    const COLOR_MAP = {short: 'green', medium: 'orange', long: 'red'};
    const LABEL_MAP = {short: 'Short', medium: 'Medium', long: 'Long'};

    const getColorByTime = () => COLOR_MAP[getTimeBracket()];
    const getQueueTypeByTime = () => LABEL_MAP[getTimeBracket()];

    return <div className="location-block" onClick={() => setLocationToDisplay(location)}>
        <div className="location-block-top">
            <div className='location-block-icon'>
                {location.icon}
            </div>


            <QueueIndicator type={getQueueTypeByTime()} />


        </div>
        <span className='location-block-title'>
            {location.name}
        </span>
        <span className='location-block-category'>
            {location.category}
        </span>
        <span className='location-block-time-estimated'>
            <span className='estimated-time'>
                {calculateEstimatedTime()}
            </span>
            <span className='estimated-time-label'> min estimated</span>
        </span>
        <div className='location-block-time-bar-wrapper'>
            <div className='location-block-time-bar'
                 style={{width: `${(calculateEstimatedTime() / 60) * 100}%`, backgroundColor: getColorByTime()}}></div>
            <div className='location-block-time-bar-threshold'></div>
        </div>
        <div className='location-block-bottom'>
            <span className='location-block-recent-reports'>
                {location.reports.length} recent reports
            </span>
            <button className='location-block-details-bttn'>
                View details →
            </button>
        </div>
    </div>;
}
