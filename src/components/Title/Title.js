import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";

function Title(props) {
  console.log(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let isWin = props.destination === props.value;
  return (
    <div>
      <Block
        disabled={props.attempt ? false : true}
        isMarker={props.isMarker}
        onClick={
          props.destination === props.value
            ? (e) => {
                // alert("Right! click 'Start new game!' to start a new game");
                props.handleAttempt();
                handleShow();
              }
            : (e) => {
                // alert(
                //   `Oops, you failed! Right answer is ${props.destination}.click 'Start new game!' to start a new game`
                // );
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.destination === props.value
              ? "Right! click 'Start new game!' to start a new game"
              : `Oops, you failed! Right answer is ${props.destination}.click 'Start new game!' to start a new game`}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Block>
    </div>
  );
}

export default Title;

//get the boolean property from props and adapt style
const Block = styled.button`
  background-color: ${(props) =>
    props.destination === props.value ? "palevioletred" : "white"};
  color: ${(props) =>
    props.destination === props.value ? "white" : "palevioletred"};
  display: inline-block;
  visibility: ${(props) => (props.isGameStarted ? "visible" : "hidden")};
  cursor: pointer;
  font-size: 2em;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:hover {
    background-color: lightblue;
  }
`;
