import React, { Component, Fragment } from "react"
import {  FeedbackOptions } from "./feadbackButton/fetbeckBatton"
import { Section } from "./section/section"
import { Statistics } from "./statistic/statistic"
import { Notification } from './notification/notification'


export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
    bad: 0,
    total: 0,
  positivePercentage: 0,
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return this.countTotalFeedback()
      ? Math.round((good / this.countTotalFeedback()) * 100)
      : 0;
  };

  handleClickBtnGood = option => {
     this.setState(prevState => {
        return { [option]: prevState[option] + 1 }
      })
  }

  render() {
    const {good,neutral,bad}=this.state
    return (
      <Fragment><Section title={"Please leave feedback"}>
        <FeedbackOptions
          onLeaveFeedback={this.handleClickBtnGood}
          option={['good', 'neutral', 'bad']} />
      </Section><Section title={"Statistics"}>
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section></Fragment>)
   
  }
};
