import './QueueIndicator.css';

export default function QueueIndicator({type,language}) {

    return <div className={`location-block-queue-indicator indicator--${type.toLowerCase()}`}>
        {type} {language==="en" ? "queue" : "kolejka"}
    </div>
}
