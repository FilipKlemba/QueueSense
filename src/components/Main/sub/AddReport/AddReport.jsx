import './AddReport.css';
import {useEffect, useState} from "react";
import EstimatedTimeButton from "./sub/EstimatedTimeButton/EstimatedTimeButton.jsx";

export default function AddReport() {
    const [report,setReport]= useState({
        location:"",
        waitTime:0
    });
    const [isReportValid,setIsReportValid] = useState(false);
    const [locationsName,setLocationsName]=useState([]);
    const time = [5,10,15,20,30,45];


    const setLocation = (location) => {
        setReport(prev => ({ ...prev,location: location }));
    }

    const setWaitTime = (waitTime) => {
        setReport(prev=>({...prev,waitTime:waitTime}))
    }

    const validateReport = ()=>{
        return report.location!=="" && report.waitTime!==0;
    }



    useEffect(()=>{
        setIsReportValid(()=>validateReport());
    },[report])

    useEffect(() => {

        const fetchData = async () => {
            const names = []
            const response = await fetch('./data.json')
            const data = await response.json();

            data.forEach((item) => {
                names.push(item.name);
            })
            setLocationsName(names);
        }
        fetchData();
    },[])

    return <div id='add-report-container'>
        <div id='add-report-left'>
            <h1>Help the <br></br><span id='add-report-styled'>community</span></h1>
            <span id='add-report-left-label'>Submit your current waiting time experience. Your report updates the live average immediately and helps others plan their visit.</span>
        </div>
        <div id='add-report-right'>
            <span id='add-report-right-label-1'>LOCATION</span>
            <select id='add-report-select' name="time" onChange={(e)=>setLocation(e.target.value)}>
                <option value=''>Select a location...</option>
                {locationsName.map(name=>{
                    return <option key={name} value={name}>{name}</option>
                })}
            </select>
            <div id='add-report-right-label-2'>YOUR ESTIMATED WAIT</div>
            <div id='add-report-right-bttns-container'>
                {time.map(time=>{
                    return <EstimatedTimeButton time={time} report={report} setWaitTime={setWaitTime}/>
                })}
            </div>
            <button id='submit-report' disabled={!isReportValid}>
                Submit report
            </button>

        </div>
    </div>
}
