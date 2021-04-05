import React from "react";
import Title from "../Title/Title";
import styled from "styled-components";

function Field(props) {
  return (
    <FieldContainer>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Title></Title>
    </FieldContainer>
  );
}

export default Field;

let x = 3;
let y = 3;

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${x}, 1fr);
  grid-template-rows: repeat(${y}, 1fr);
  grid-gap: 5px;
`;
