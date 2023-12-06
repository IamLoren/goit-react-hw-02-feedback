import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return (this.state.good * 100) / total;
  };

  render() {

    const totalFeedback = this.countTotalFeedback();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please, leave feedback">
          <FeedbackOptions addFeedback={this.addFeedback} />
        </Section>

        {totalFeedback > 0 ?
        (<Section title="Statistics">
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        </Section>)
        : (<Notification message="There is no feedback"/>)}
        
      </div>
    );
  }
}
