import React from "react";
import styled from "styled-components";

function Title(props) {
  console.log(props);
  let isWin = props.destination === props.value;
  return (
    <div>
      <Block
        disabled={props.attempt ? false : true}
        isMarker={props.isMarker}
        onClick={
          props.destination === props.value
            ? (e) => {
                alert("Right! click 'Start new game!' to start a new game");
                props.handleAttempt();
              }
            : (e) => {
                alert(
                  `You wrong! Right answer is ${props.destination} click 'Start new game!' to start a new game`
                );
                props.handleAttempt();
              }
        }
        isGameStarted={props.isGameStarted}
        isWin={isWin}
        attempt={props.attempt}
      >
        {props.value}
        {props.isMarker ? "🏁" : ""}
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
