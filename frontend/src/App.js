import "./App.css";

const MAX_GAME_VIEW = 10;
const API_URL = "https://localhost:7126/gameslist";

function App() {
  // const anArray = ["1", "2", "3"];

  const anArray = fetch(API_URL).then((response) =>
    response.json().then((data) => console.log(data))
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>{anArray.data}</p>
        <p>studio ribbon</p>
      </header>
    </div>
  );
}

export default App;
