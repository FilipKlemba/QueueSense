import './AddReport.css';
import {useEffect, useState} from "react";
import EstimatedTimeButton from "./sub/EstimatedTimeButton/EstimatedTimeButton.jsx";

export default function AddReport({language}) {
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
                names.push(item.name[language]);
            })
            setLocationsName(names);
        }
        fetchData();
    },[])

    return <div id='add-report-container'>
        <div id='add-report-left'>
            <h1>{language==="en" ? "Help the" : "Pomóż"} <br></br><span id='add-report-styled'>{language==="en" ? "community" : "społeczeństwu"}</span></h1>
            <span id='add-report-left-label'>{language==="en" ? "Submit your current waiting time experience. Your report updates the live average immediately and helps others plan their visit." : "Prześlij swoje aktualne doświadczenie czasu oczekiwania. Twój raport natychmiast aktualizuje średnią na żywo i pomaga innym zaplanować wizytę.\n"}</span>
        </div>
        <div id='add-report-right'>
            <span id='add-report-right-label-1'>{language==="en" ? "LOCATION" : "LOKALIZACJA"}</span>
            <select id='add-report-select' name="time" onChange={(e)=>setLocation(e.target.value)}>
                <option value=''>{language==="en" ? "Select a location..." : "Wybierz lokalizacje..."}</option>
                {locationsName.map(name=>{
                    return <option key={name} value={name}>{name}</option>
                })}
            </select>
            <div id='add-report-right-label-2'>{language==="en" ? "YOUR ESTIMATED WAIT" : "TWÓJ CZAS OCZEKIWANIA"}</div>
            <div id='add-report-right-bttns-container'>
                {time.map(time=>{
                    return <EstimatedTimeButton time={time} report={report} setWaitTime={setWaitTime}/>
                })}
            </div>
            <button id='submit-report' disabled={!isReportValid}>
                {language==="en" ? "Submit report" : "Wyślij zgłoszenie"}
            </button>

        </div>
    </div>
}
