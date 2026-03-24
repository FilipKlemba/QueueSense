import './QueueIndicator.css';

export default function QueueIndicator({type}) {

    return <div className={`location-block-queue-indicator indicator--${type.toLowerCase()}`}>
        {type} queue
    </div>
}
