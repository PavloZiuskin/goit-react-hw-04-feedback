import React, {Fragment ,useState} from "react"
import {  FeedbackOptions } from "./feadbackButton/fetbeckBatton"
import { Section } from "./section/section"
import { Statistics } from "./statistic/statistic"
import { Notification } from './notification/notification'


export const App=()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  const handleClickBtnGood = e => {
    const options = e.currentTarget.innerHTML;
    switch (options) {
      case "good":
        setGood(prevState=>prevState+1);
        break;
      case "neutral":
        setNeutral(prevState=>prevState+1);
        break;
      case "bad":
        setBad(prevState=>prevState+1)
        break;
      default: return;
    }
  }
    
  return (
      <Fragment><Section title={"Please leave feedback"}>
        <FeedbackOptions
          onLeaveFeedback={handleClickBtnGood}
          option={['good', 'neutral', 'bad']} />
      </Section><Section title={"Statistics"}>
          {!countTotalFeedback() ? (
            <Notification message="There is no feedback!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section></Fragment>)
   
  };
