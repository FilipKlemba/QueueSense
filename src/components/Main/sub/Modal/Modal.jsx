import './Modal.css';
import {useEffect, useState} from "react";
import ModalReport from "./sub/ModalReport/ModalReport.jsx";

export default function Modal({locationToDisplay, setLocationToDisplay,language}) {
    const [estimatedTime, setEstimatedTime] = useState(12);
    const [minMaxTime, setMinMaxTime] = useState({min: 0, max: 0});

    useEffect(() => {
        const min = Math.min(...locationToDisplay.reports.map(r => r.time));
        const max = Math.max(...locationToDisplay.reports.map(r => r.time));
        setMinMaxTime({min: min, max: max});
    }, [])

    const calculateEstimatedTime = () => {
        let estimatedTime = 0;
        locationToDisplay.reports.forEach(report => {
            estimatedTime += report.time;
        })
        return estimatedTime / locationToDisplay.reports.length;
    }

    useEffect(() => {
       setEstimatedTime(calculateEstimatedTime());
    },[])

    const getTimePercentage = () => (calculateEstimatedTime() / 40) * 100<=100 ? (calculateEstimatedTime() / 40) * 100 : 100;

    const getTimeBracket = () => {
        const time = getTimePercentage();
        if (time <= 45) return 'short';
        if (time <= 90) return 'medium';
        return 'long';
    };

    const COLOR_MAP = {short: 'green', medium: 'orange', long: 'red'};
    const LABEL_MAP = {short: 'Short', medium: 'Medium', long: 'Long'};

    const getColorByTime = () => COLOR_MAP[getTimeBracket()];
    const getQueueTypeByTime = () => LABEL_MAP[getTimeBracket()];


    return <div id='modal-wrapper' onClick={() => setLocationToDisplay(null)}>
        <div id='modal' onClick={(e) => e.stopPropagation()}>
            <div id='modal-header'>
                <div id='modal-header-left'>
                    <span id='modal-header-name'>
                        {locationToDisplay.name.language}
                    </span>
                    <span id='modal-header-category'>
                        {locationToDisplay.category.language}
                    </span>
                </div>
                <div id='modal-header-right'>
                    <div id='close-modal-bttn'>
                        ✕
                    </div>
                </div>
            </div>
            <div id='modal-bar-container'>
                <span id='modal-estimated-label'>
                    <span id='modal-estimated-label-inner'>{estimatedTime.toFixed(0)} </span>
                    {language==="en" ? "minutes estimated" : "minut szacunkowo"}
                </span>
                <div id='modal-bar-wrapper'>
                    <div id='modal-bar' style={{width:`${getTimePercentage()}%`,backgroundColor:getColorByTime()}}></div>
                    <div id='modal-bar-track'></div>
                </div>
                <div id='modal-bar-threshold-container'>
                    <div className='modal-bar-threshold'>0 min</div>
                    <div className='modal-bar-threshold'>10 min</div>
                    <div className='modal-bar-threshold'>25 min</div>
                    <div className='modal-bar-threshold'>45+ min</div>
                </div>
            </div>
            <div id='modal-statistics-container'>
                <div className='modal-statistic'>
                    <span className='modal-statistic-title'>{locationToDisplay.reports.length} </span>
                    <span className='modal-statistic-subtitle'>{language==="en" ? "reports today" : "zgłoszeń dzisiaj"}</span>
                </div>
                <div className='modal-statistic'>
                    <span className='modal-statistic-title'>{minMaxTime.min}</span>
                    <span className='modal-statistic-subtitle'>{language==="en" ? "Min wait (min)" : "Min. oczek. (min)"}</span>
                </div>
                <div className='modal-statistic'>
                    <span className='modal-statistic-title'>{minMaxTime.max}</span>
                    <span className='modal-statistic-subtitle'>{language==="en" ? "Max wait (min)" : "Min. oczek. (min)"}</span>
                </div>
            </div>
            <div id='modal-reports-container'>
                <span id='modal-reports-title'>
                    {language==="en" ? "Recent reports" : "Niedawne zgłoszenia"}
                </span>
                {locationToDisplay.reports.map(report => {
                    return <ModalReport report={report} language={language} />
                })}
            </div>
        </div>
    </div>;
}
