import './ModalReport.css';

export default function ModalReport({report,language}) {


    const getTimeBracket = () => {
        const time = report.time;
        if (time <= 30) return language==="en" ? "short" : "krótka";
        if (time <= 60) return  language==="en" ? "medium" : "średnia";
        return  language==="en" ? "long" : "długa"
    };

    const getColor = ()=>{
        const time = report.time;
        if(time<=30) return 'short';
        if(time<=60) return 'medium';
        else return 'long'
    }


    return <div className="modal-report-container">
        <div className='modal-report-left'>
            <span className='modal-report-time'>{report.time} {language==="en" ? "minutes" : "minut"}</span>
            <span className='modal-report-timestamp'>{report.timestamp} {language==="en" ? " minutes ago" : " minut temu"}</span>
        </div>
        <div className='modal-report-right'>
            <span className={`modal-indicator--${getColor()}`}>{getTimeBracket()} {language==="en" ? "queue" : "kolejka" }</span>
        </div>
    </div>;
}
