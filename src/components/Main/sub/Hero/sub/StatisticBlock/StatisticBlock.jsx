import './StatisticBlock.css';

export default function StatisticBlock({statistic}) {
    return <div className="statistic-block" style={{"--before-color":statistic.color}}>

        <div className="statistic-value">{statistic.value}</div>
        <div className="statistic-subtitle">{statistic.subTitle}</div>
        <div className="statistic-title">{statistic.title}</div>

    </div>;
}
