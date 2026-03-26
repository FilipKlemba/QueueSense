import './StatisticBlock.css';

export default function StatisticBlock({statistic,language}) {
    return <div className="statistic-block" style={{"--before-color":statistic.color}}>

        <div className="statistic-value">{statistic.value}</div>
        <div className="statistic-subtitle">{statistic.subTitle[language]}</div>
        <div className="statistic-title">{statistic.title[language]}</div>

    </div>;
}
