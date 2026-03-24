import './EstimatedTimeButton.css';

export default function EstimatedTimeButton({time,report,setWaitTime}) {


    return  <button className={`${report.waitTime===time ? 'report-estimated-time-bttn--active' : "report-estimated-time-bttn"}`} onClick={()=>setWaitTime(time)}>
        {time} min
    </button>;
}
