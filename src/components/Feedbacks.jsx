import React from 'react';

export class Feedbacks extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    event.target.name === 'goodFeedback'
      ? this.setState(prevState => ({ good: prevState.good + 1 }))
      : event.target.name === 'neutralFeedback'
      ? this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
      : this.setState(prevState => ({ bad: prevState.bad + 1 }));
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
    return (
      <section className="feedbacks">
        <div className="leaveFeedback">
          <h1 className="feedbacksTitle">Please, leave feedback</h1>
          <div className="btns" style={{ display: 'flex', gap: 20 }}>
            <button
              className="feedback"
              name="goodFeedback"
              onClick={this.addFeedback}
            >
              Good
            </button>
            <button
              className="feedback"
              name="neutralFeedback"
              onClick={this.addFeedback}
            >
              Neutral
            </button>
            <button
              className="feedback"
              name="badFeedback"
              onClick={this.addFeedback}
            >
              Bad
            </button>
          </div>
        </div>

        <div className="statistics">
          <h2 className="statisticsTitle">Statistics</h2>
          <p className="statField">Good: {this.state.good}</p>
          <p className="statField">Neutral: {this.state.neutral}</p>
          <p className="statField">Bad: {this.state.bad}</p>
          <p className="statField">Total: {this.countTotalFeedback()}</p>
          <p className="statField">
            Positive feedback: {(this.countPositiveFeedbackPercentage() % 1) === 0 ? this.countPositiveFeedbackPercentage() : this.countPositiveFeedbackPercentage().toFixed(2)}%
          </p>
        </div>
      </section>
    );
  }
}
