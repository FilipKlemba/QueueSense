import './ModalReport.css';

export default function ModalReport({report}) {


    const getTimeBracket = () => {
        const time = report.time;
        if (time <= 30) return 'short';
        if (time <= 60) return 'medium';
        return 'long';
    };


    return <div className="modal-report-container">
        <div className='modal-report-left'>
            <span className='modal-report-time'>{report.time} minutes</span>
            <span className='modal-report-timestamp'>{report.timestamp} minutes ago</span>
        </div>
        <div className='modal-report-right'>
            <span className={`modal-indicator--${getTimeBracket()}`}>{getTimeBracket()} queue</span>
        </div>
    </div>;
}
