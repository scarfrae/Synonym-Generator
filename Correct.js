// import react, {ReactEventHandler, useState} from 'react';
// import './App.css';
// /* STEPS
// 1. Create basic form - form, label, button, input
//   - semantic html elements
// 2.useState

// */
// type Syno = {
//   word: string,
//   score: number,
// }; //object

// function App() {
//   //useState
//   const [word, setWord] = useState(""); //set as initially string
//   const [syno, setSyno] = useState<Syno[]>([])

//   const fetchSyno = (word: string) => {
//     fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
//     .then((response) => response.json())
//     .then(setSyno);
//   };


//   const handleFormSubmit = (e: React.FormEvent) => { //called when click on button
//     e.preventDefault();
//     fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
//     .then((response) => response.json())
//     .then(setSyno);
//   };

//   const handleSynoClicked = (word: string) => {
//     setWord(word);
//     fetchSyno(word);
//   };




//   return (
//     <div className="App">
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor='input-word'>Your Word: </label>
//         <input 
//         id="word" 
//         type="text" 
//         value={word}
//         onChange={(e) => setWord(e.target.value)}>
//           </input> {/*semantic property*/}
//         <button>
//           Submit
//         </button>
//       </form>
//       {/*render to page*/}
//       {syno.map((syno) => (
//         <li onClick={() => handleSynoClicked(syno.word)}
        
//         key={syno.word}>
//           {syno.word}
//         </li>
//       ))}
//     </div>
//   );
// }

// export default App;