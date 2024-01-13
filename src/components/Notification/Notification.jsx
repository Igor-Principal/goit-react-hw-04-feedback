import css from './notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={css.title}>{message}</h2>;
};

export default Notification;
