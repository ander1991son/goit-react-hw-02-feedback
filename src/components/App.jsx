// import FeedBack from './FeedBack/FeedBack';
// import LeaveFeedBack from './LeaveFeedBack/LeaveFeedBack';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <FeedBack />
//     </div>
//   );
// };

/////////////////////refactorizacion

import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackReceived: false, good: 0, neutral: 0, bad: 0 };
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { feedbackReceived, good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {feedbackReceived || good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics feedback={{ good, neutral, bad }} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
