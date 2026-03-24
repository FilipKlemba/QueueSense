import './Hero.css';
import StatisticBlock from "./sub/StatisticBlock/StatisticBlock.jsx";

export default function Hero() {

    const statistics = [
        {
            value:3,
            subTitle:"Short queue right now",
            title:"Short queues",
            color:"green"
        },
        {
            value:"19min",
            subTitle:"across all locations",
            title:"Average wait",
            color:"orange"
        },
        {
            value:3,
            subTitle:"expected delays",
            title:"Long queues",
            color:"red"
        },
        {
            value:45,
            subTitle:"in the last hour",
            title:"Reports today",
            color:"blue"
        }
    ]

    return <div id="hero">
        <div id="hero-left">
            <span id='hero-title'>LIVE DATA · UPDATED EVERY MINUTE</span>
            <h1 id='hero-label-left-1'>Know before <br></br>
                you
                <span id='hero-label-left-1-green'> go</span>
            </h1>
            <span id='hero-label-left-2'>Check real-time waiting times at post offices, university counters, cafeterias and government offices — powered by people like you.</span>
            <div id='hero-left-nav'>
                <a href='#locations' id='hero-nav-bttn-1'>Browse locations</a>
                <a href='#add-report-container' id='hero-nav-bttn-2'>Submit a report →</a>
            </div>
        </div>
        <div id="hero-right">
            {statistics.map(stat=>{
                return <StatisticBlock statistic={stat}/>
            })}
        </div>
    </div>
}
