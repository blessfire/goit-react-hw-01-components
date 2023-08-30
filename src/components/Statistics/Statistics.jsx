import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  
  return (< section className={css.statistics} >
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.stat_list}> {stats.map((stat) => <li key={stat.id} className={css.item}><span className={css.label}>{stat.label}</span>
    <span className={css.percentage}>{stat.percentage}%</span></li>)}
    </ul>
  </section >
)}

Statistics.propTypes = {

  label: PropTypes.string,
  percentage: PropTypes.number,
}