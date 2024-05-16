import "./App.css";
import StudioRibbon from "./StudioRibbon.js";
import GameCard from "./GameCard.js";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MAX_GAME_VIEW = 10;
const API_URL = "https://localhost:7126/gameslist";

function GameCardContainer(props) {
  props.games.map((g) => {
    return <p>{g.studio_name}</p>;
  });
}

function App() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const studios = data
    ? data.map((d) => {
        return d.studio_name;
      })
    : [];

  return (
    <div className="App">
      <header className="App-header">
        <StudioRibbon studios={studios} />

        <div style={{ height: "200px" }}></div>

        {data ? (
          <div style={{ width: "1000px" }}>
            {data.slice(0, 10).map((d, item) => {
              return (
                <img
                  width="200"
                  height="200"
                  src={data[item].image_url}
                  onClick={() => {
                    setSelectedGame(data[item]);
                    handleShow();
                  }}
                ></img>
              );
            })}

            {selectedGame && (
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <tr>
                    <td>Game Title: {selectedGame.game_title}</td>
                    <td>Description: {selectedGame.description}</td>
                    <td>Genre: {selectedGame.genre}</td>
                    <td>Platform: {selectedGame.platform}</td>
                    <td>Release Date: {selectedGame.release_date}</td>
                    <td>Rating: {selectedGame.rating}</td>
                    <td>Price: {selectedGame.price}</td>
                  </tr>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
        ) : (
          "Loading..."
        )}
      </header>
    </div>
  );
}

export default App;
