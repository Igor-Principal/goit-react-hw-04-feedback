import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>
        Positive feedback: {total > 0 ? positivePercentage : 0} %
      </li>
    </ul>
  );
};


export default Statistics;
