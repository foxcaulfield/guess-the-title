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
import { Button, Modal } from "react-bootstrap";

function Field(props) {
  const [isGameStarted, setGameStarted] = useState(false);

  const [attempt, setAttempt] = useState(1);

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
          isDestination={true}
        ></Title>
      );
    }
  }

  return (
    <div>
      <Button
        disabled={isGameStarted && attempt}
        onClick={() => {
          props.resetMarkerPosition();
          props.moveMarker();
          setGameStarted(true);
          setAttempt(1);
        }}
      >
        Start new game!
      </Button>

      <FieldContainer
        fieldSizeX={props.state.fieldSizeX}
        fieldSizeY={props.state.fieldSizeY}
      >
        {titles.filter((title) => title.value === title.destination)}
      </FieldContainer>
      {props.state.markerMoves.join("")}
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
    </div>
  );
}

//render a given number of columns and rows (get them from props)
const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.fieldSizeX}, 1fr);
  grid-template-rows: repeat(${(props) => props.fieldSizeY}, 1fr);
  grid-gap: 5px;
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
