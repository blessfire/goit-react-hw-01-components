import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (< section className={css.statistics} >
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.stat_list}> {data.map((stat) => <li key={stat.id} className={css.item}><span className={css.label}>{stat.label}</span>
     
    <span className={css.percentage}>{stat.percentage}%</span></li>)}
  </ul></section>)
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}

/*  < section className = "statistics" >
  <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      <li className={css.item} id='id-1'>
        <span className={css.label}>label</span>
      <span className={css.percentage}>percentage%</span>
    </li>.map()
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
</>
)
}*/
