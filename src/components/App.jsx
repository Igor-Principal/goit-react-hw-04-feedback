import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedback;

  const handleFeedback = type => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };
  const countTotalFeedback = () => bad + good + neutral;

  const countPositiveFeedbackPercentage = key =>
    Number((key / countTotalFeedback()) * 100).toFixed(2);

  const total = countTotalFeedback();
  const options = Object.keys(feedback);

  return (
    <Section title="Please leave your feedback">
      <FeedbackOptions handleFeedback={handleFeedback} options={options} />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage(good)}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};
