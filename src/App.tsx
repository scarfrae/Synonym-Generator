import React, { useState } from 'react'; //to have dynamic change when input occurs
import './App.css';
/*QUESTION: make react application that calls api and prints synonyms onto page*/
/*STEPS: 
1. Create return structure: input, label, button
2. Create useState for word
*/
//object
type synonym = {
  word: string,
  score: number,
};

function App() {
  //useState
  const [word, setWord] = useState("");
  const [synonym, setSynonym] = useState<synonym[]>([]);

  const fetchSyno = (word: string) => {
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
    .then(response => response.json())
    .then(setSynonym)
  }
  //api call function
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //causes no continuous refresh 
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
    .then(response => response.json())
    .then(setSynonym)
  }
  const handleSynoClicked = (word: string) => {
    setWord(word);
    fetchSyno(word);
  }
  


  return (
    <div className="App">
      {/*create form*/}
      <nav><h1>Synonym Solutions</h1></nav>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='word-input'>
          Your Word
        </label>
        <input
        id='word-input'
        type='word'
        value={word}
        onChange={(e) => setWord(e.target.value)}>
        </input>
        <button>
          Submit
        </button>
      </form>
      {/*renders to page*/}
      {/**/}
      {synonym.map((synonym) => (
        <li onClick={() => handleSynoClicked(synonym.word)} key={synonym.word}>
          {synonym.word}</li>
      ))}
    </div>
  );
}

export default App;
