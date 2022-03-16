import {useState} from "react";

const Statistics = (props) => {
  return(
    <div>
      {props.value > 0 && <p>{props.text} - {props.value} </p>}
    </div>
  )
}

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)


  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(prev => prev + 1)}>Good</button>
      <button onClick={() => setNeutral(prev => prev + 1)}>Neutral</button>
      <button onClick={() => setBad(prev => prev + 1)}>Bad</button>

      <h1>Statistics</h1>

      {(good > 0 || neutral > 0 || bad > 0) && (
        <>
          <Statistics text="Good" value={good}></Statistics>
          <Statistics text="Neutral" value={neutral}></Statistics>
          <Statistics text="Bad" value={bad}></Statistics>
          <Statistics text="all" value={good + neutral + bad}></Statistics>
          <Statistics text="Average" value={(good + neutral + bad) / 3}></Statistics>
        </>
      )}
      {
        (good === 0 || neutral === 0 || bad === 0) && (
          <p>No Feedback given</p>
        )
      }
    </div>
  );
}

export default App;
