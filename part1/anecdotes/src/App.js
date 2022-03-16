import { useState, useEffect } from "react";


function App() {


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]




  const [current, setCurrent] = useState(0);
  const [arrVotes, setArrVotes] = useState([0, 0, 0, 0, 0, 0, 0])
  const [biggestInd, setBiggestInd] = useState(0);

  const next = () => {
    if(current < anecdotes.length - 1) {
      setCurrent(curr => curr + 1);
    } else {
      setCurrent(0);
    }
  }

  const voteUp = (currInd) => {

    

    setArrVotes(previousArr => previousArr.map((vote, index) => {
      if(index === currInd) {
        return previousArr[index] += 1;
      } else {
        return previousArr[index];
      }
    }))
  
  }

  useEffect(() => {
    let biggest = Math.max(...arrVotes)
    setBiggestInd(arrVotes.findIndex(x => x == biggest));
    
  }, [arrVotes]);


  return (
    <div className="App">
      <h1>Anecdotes of the Day</h1>
      <p>{anecdotes[current]}</p>
      <p>has {arrVotes[current]} votes</p>
      <br />
      <button onClick={() => voteUp(current)}>Vote</button>
      <button onClick={() => next()}>Next</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[biggestInd]}, with {arrVotes[biggestInd]} votes</p>
    </div>
  );
}

export default App;
