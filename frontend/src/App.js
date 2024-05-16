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

function loadInfoModal() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Description:</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (props) => {
    const { description } = props;
    return setShow(true) && setSelectedGame(description);
  };

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

        {/* 
        {data ? (
          <div>
            <a href="">All Studios</a>
            {studios.slice(0, MAX_GAME_VIEW).map((s) => {
              return (
                <a onClick={setData(data.filter((f) => f.studio_name === s))}>
                  {" " + s + " "}
                </a>
              );
            })}
          </div>
        ) : (
          <></>
        )} */}
        {/* 
        {data ? (
          <div>
            {data.slice(0, 5).map((d) => {
              return <GameCard game={d.image_url} />;
            })}
            <br />
            {data.slice(5, 10).map((d) => {
              return <GameCard game={d.image_url} />;
            })}
          </div>
        ) : (
          <></>
        )} */}

        <div style={{ height: "200px" }}></div>

        {data ? (
          <div>
            <img
              width="200"
              height="200"
              src={data[0].image_url}
              // onClick={handleShow(data[0])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[1].image_url}
              // onClick={handleShow(data[1])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[2].image_url}
              // onClick={handleShow(data[2])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[3].image_url}
              // onClick={handleShow(data[3])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[4].image_url}
              // onClick={handleShow(data[4])}
            ></img>
            <br />
            <img
              width="200"
              height="200"
              src={data[5].image_url}
              // onClick={handleShow(data[5])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[6].image_url}
              // onClick={handleShow(data[6])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[7].image_url}
              // onClick={handleShow(data[7])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[8].image_url}
              // onClick={handleShow(data[8])}
            ></img>
            <img
              width="200"
              height="200"
              src={data[9].image_url}
              // onClick={handleShow(data[9])}
            ></img>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedGame}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{selectedGame}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          "Loading..."
        )}
      </header>
    </div>
  );
}

export default App;
