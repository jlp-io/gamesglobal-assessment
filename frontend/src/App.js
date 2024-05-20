import "./App.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const API_URL = "https://localhost:7126/gameslist";

function App() {
  const [studioLabelData, setStudioLabelData] = useState(null);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedStudio, setSelectedStudio] = useState("All Studios");
  const [minGameView, setMinGameView] = useState(0);
  const [maxGameView, setMaxGameView] = useState(10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setStudioLabelData(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const studios = studioLabelData
    ? studioLabelData.map((d) => {
        return d.studio_name;
      })
    : [];

  const filterGamesByStudio = (studioName) => {
    console.log(studioName);
    fetch("" + API_URL + "/" + studioName)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* {data && <StudioRibbon studios={studios} />} */}
        {studioLabelData && (
          <div style={{ backgroundColor: "gray" }}>
            {minGameView > 0 && (
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                onClick={() => {
                  setMinGameView(minGameView - 10);
                  setMaxGameView(maxGameView - 10);
                }}
              >
                {"<"}
              </a>
            )}
            {maxGameView < 11 && (
              <a
                style={{
                  color: selectedStudio === "All Studios" ? "green" : "white",
                  textDecoration: "none",
                }}
                href=""
              >
                All Studios
              </a>
            )}
            {studios.slice(minGameView, maxGameView).map((studio_name) => {
              return (
                <a
                  style={{
                    color: selectedStudio === studio_name ? "green" : "white",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    filterGamesByStudio(studio_name);
                    setSelectedStudio(studio_name);
                  }}
                >
                  {" " + studio_name + " "}
                </a>
              );
            })}
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              onClick={() => {
                setMinGameView(minGameView + 10);
                setMaxGameView(maxGameView + 10);
              }}
            >
              {">"}
            </a>
          </div>
        )}
        <div style={{ height: "150px" }}></div>
        {data ? (
          <div style={{ width: "1000px" }}>
            {data.slice(0, 12).map((d, item) => {
              return (
                <img
                  style={{ border: "4px solid #a9a9a9" }}
                  width="200"
                  height="200"
                  src={data[item].image_url}
                  onClick={() => {
                    setSelectedGame(data[item]);
                    handleShow();
                    console.log(studioLabelData);
                  }}
                ></img>
              );
            })}
          </div>
        ) : (
          "Loading..."
        )}
      </header>
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
  );
}

export default App;
