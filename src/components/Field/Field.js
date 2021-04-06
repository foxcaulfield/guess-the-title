import React, { useState } from "react";
import Title from "../Title/Title";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  resetMarkerPositionActionCreator,
  addColumnsActionCreator,
  addRowsActionCreator,
  removeColumnsActionCreator,
  removeRowsActionCreator,
  moveMarkerActionCreator,
} from "../../store/reducers/fieldReducer";
import { Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
function Field(props) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [isGameStarted, setGameStarted] = useState(false);

  const [attempt, setAttempt] = useState(0);

  const handleAttempt = () => {
    setAttempt(0);
    console.log("attempt left");
    console.log(attempt);
  };

  //create an array and push components  in it
  let titles = [];
  for (let y = 1; y <= props.state.fieldSizeY; y++) {
    for (let x = 1; x <= props.state.fieldSizeX; x++) {
      titles.push(
        <Title
          key={x + "" + y}
          value={x + "" + y}
          isMarker={x + "" + y === props.state.markerPosition.join("")}
          destination={props.state.destinationPosition.join("")}
          handleAttempt={handleAttempt}
          isGameStarted={isGameStarted}
          attempt={attempt}
          isDestination={
            x + "" + y === props.state.destinationPosition.join("")
          }
        ></Title>
      );
    }
  }

  return (
    <div className="container">
      <Button
        disabled={isGameStarted && attempt}
        onClick={() => {
          props.resetMarkerPosition();
          props.moveMarker();
          setGameStarted(true);
          setAttempt(1);
          setShowMessage(true);
        }}
      >
        Start new game!
      </Button>

      <FieldContainer
        fieldSizeX={props.state.fieldSizeX}
        fieldSizeY={props.state.fieldSizeY}
      >
        {titles.map((title) =>
          title.value === title.destination
            ? { ...title, isDestination: true }
            : { ...title, isDestination: false }
        )}
      </FieldContainer>
      <div>
        <Button
          variant="secondary"
          size="sm"
          disabled={attempt}
          onClick={props.addColumns}
        >
          add cols
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={attempt}
          onClick={props.addRows}
        >
          add rows
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={attempt}
          onClick={props.removeColumns}
        >
          remove cols
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={attempt}
          onClick={props.removeRows}
        >
          remove rows
        </Button>
      </div>
      {showButton && isGameStarted && (
        <Button onClick={() => setShowMessage(true)} size="sm">
          Show the path
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        // in={true}
        // timeout={400}
        timeout={{
          appear: 500,
          enter: 300,
          exit: 500,
        }}
        transitionAppear={true}
        transitionAppearTimeout={3000}
        transitionEnter={true}
        transitionEnterTimeout={3000}
        classNames="alert"
        mountOnEnter
        unmountOnExit
        appear
        enter
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          // timeout={400}
          mountOnEnter
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>The path</Alert.Heading>
          <div style={{ fontSize: "1.5em" }}>
            {props.state.markerMoves.join("")}
          </div>
          {/* <p>This alert message is being transitioned in and out of the DOM.</p> */}
          <Button onClick={() => setShowMessage(false)}>Hide</Button>
        </Alert>
      </CSSTransition>
    </div>
  );
}

//render a given number of columns and rows (get them from props)
const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.fieldSizeX}, 80px);
  grid-template-rows: repeat(${(props) => props.fieldSizeY}, 1fr);
  grid-gap: 5px;
  justify-content: center;
  margin: 1em;
`;

//pass state to props
let mapStateToProps = (state) => {
  return {
    state,
  };
};

//pass callbacks to props
let mapDispatchToProps = (dispatch) => {
  return {
    resetMarkerPosition: () => {
      dispatch(resetMarkerPositionActionCreator());
    },
    addColumns: () => {
      dispatch(addColumnsActionCreator());
    },
    addRows: () => {
      dispatch(addRowsActionCreator());
    },
    removeColumns: () => {
      dispatch(removeColumnsActionCreator());
    },
    removeRows: () => {
      dispatch(removeRowsActionCreator());
    },
    moveMarker: () => {
      dispatch(moveMarkerActionCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
