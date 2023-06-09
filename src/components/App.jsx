// import React from 'react';
import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from './Notification/Notification';



export const App = () =>{
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

  const onBtnClick = options => {
    setFeedback({...feedback, [options]: feedback[options] + 1})
    // this.setState(prevState => ({
    //   [options]: prevState[options] + 1,
    };
  
  const countTotalFeedback  =() =>{
  return feedback.good+feedback.neutral+feedback.bad;
        // const {good,neutral,bad} = this.state;
    // return good+neutral+bad
  };  

  const countPositiveFeedbackPercentage =() =>{
    const total = countTotalFeedback();
    return Math.round((feedback.good / total) * 100);
  };
  // const countPositiveFeedbackPercentage = () => {
  //    Math.round((feedback.good / countTotalFeedback) * 100);}
  

        return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onBtnClick={onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
  




// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onBtnClick = options =>{
//     this.setState(prevState => ({
//       [options]: prevState[options] + 1,
//     }));
//   };

//   countTotalFeedback  =() =>{
//     const {good,neutral,bad} = this.state;
//     return good+neutral+bad
//   };

//   countPositiveFeedbackPercentage   =() =>{
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onBtnClick={this.onBtnClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }


