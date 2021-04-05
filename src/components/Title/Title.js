import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

function Title(props) {
  return (
    <div>
        <Block isMarker={props.isMarker}>
        {props.value}
        {props.isMarker ? "true" : "false"}
      </Block>
    </div>
  );
}

export default Title;

//get the boolean property from props and adapt style
const Block = styled.div`
  background: ${props => props.isMarker ? "palevioletred" : "white"};
  color: ${props => props.isMarker ? "white" : "palevioletred"};
  display: inline-block;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: lightblue;
    
  }
`;

