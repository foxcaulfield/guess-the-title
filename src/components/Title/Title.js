import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Title(props) {
  console.log(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let isWin = props.destination === props.value;
  return (
    <div style={{ alignSelf: "center", justifySelf: "center" }}>
      <Button
        style={{
          width: 80,
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1em",
        }}
        variant={props.isDestination && !props.attempt ? "info" : "warning"}
        size="lg"
        disabled={props.attempt ? false : true}
        isMarker={props.isMarker}
        onClick={
          props.destination === props.value
            ? (e) => {
                props.handleAttempt();
                handleShow();
              }
            : (e) => {
                props.handleAttempt();
                handleShow();
              }
        }
        isGameStarted={props.isGameStarted}
        isWin={isWin}
        attempt={props.attempt}
      >
        {/* {props.value} */}
        {props.isMarker ? "🏁" : ""}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.destination === props.value
            ? "Right! click 'Start new game!' to start a new game"
            : `Oops, you failed! Right answer is marked by green color. Click 'Start new game!' to start a new game`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Title;
