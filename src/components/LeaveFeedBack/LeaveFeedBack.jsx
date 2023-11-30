import React, { Component } from 'react';

class LeaveFeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      positiveFeedbackPercentage: 0,
    };
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props.step;
    const total = good + neutral + bad;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );
    this.setState({ total, positiveFeedbackPercentage });
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <form>
        <p onClick={this.countTotalFeedback}>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.positiveFeedbackPercentage}%</p>
      </form>
    );
  }
}

export default LeaveFeedBack;
