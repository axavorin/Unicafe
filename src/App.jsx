import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Feedback = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
      <Button text="good" onClick={props.onGood}></Button>
      <Button text="neutral" onClick={props.onNeutral}></Button>
      <Button text="bad" onClick={props.onBad}></Button>
    </>
  )
}

const StatisticLine = ({text, value}) => <div>{text}: {value}</div>

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad
  
  if (total == 0) {
    return (
      <div>
        <h1>{props.header}</h1>
        No feedback given
      </div>
    )
  }

  return (
    <>
      <h1>{props.header}</h1>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>

      <StatisticLine text="all" value={total}></StatisticLine>
      <StatisticLine text="average" value={(good - bad) / total}></StatisticLine>
      <StatisticLine text="positive" value={good / total * 100 + "%"}></StatisticLine>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Feedback header="give feedback" onGood={handleGood} onNeutral={handleNeutral} onBad={handleBad}></Feedback>

      <Statistics header="statistics" good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App