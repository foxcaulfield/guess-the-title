import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  resetMarkerPositionActionCreator,
  addColumnsActionCreator,
  addRowsActionCreator,
  removeColumnsActionCreator,
  removeRowsActionCreator,
} from "../../store/reducers/fieldReducer";

function Field(props) {

//create an array and push components with value, key and boolean property in it
  let titles = [];

  for (let y = 1; y <= props.state.fieldSizeY; y++) {
    for (let x = 1; x <= props.state.fieldSizeX; x++) {
      titles.push(
        <Title
        key={x + "" + y}
          value={x + "" + y}
          isMarker={x + "" + y === props.state.markerPosition.join("")}
        ></Title>
      );
    }
  }

  return (
    <div>
      {props.state.markerPosition.join("")}
      <div>{props.state.markerPosition}</div>
      <button onClick={props.resetMarkerPosition}>change</button>
      <button onClick={props.addColumns}>add cols</button>
      <button onClick={props.addRows}>add rows</button>
      <button onClick={props.removeColumns}>remove cols</button>
      <button onClick={props.removeRows}>remove rows</button>
      <FieldContainer
        fieldSizeX={props.state.fieldSizeX}
        fieldSizeY={props.state.fieldSizeY}
      >

        {titles}
      </FieldContainer>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
