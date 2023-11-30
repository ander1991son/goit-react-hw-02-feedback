import React, { Component } from 'react';
import css from './FeedBack.module.css';
import LeaveFeedBack from 'components/LeaveFeedBack/LeaveFeedBack';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  GoodBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  NeutralBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  BadBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className={css.Container_feedBack}>
        <h3>Please leave feedback</h3>
        <div className={css.FeedBack}>
          <button onClick={this.GoodBtn}>Good</button>
          <button onClick={this.NeutralBtn}>Neutral</button>
          <button onClick={this.BadBtn}>Bad</button>
        </div>
        <div>
          <form>
            <label>
              Statics
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
            </label>
          </form>
        </div>
        <LeaveFeedBack step={this.state} />
      </div>
    );
  }
}

export default FeedBack;
