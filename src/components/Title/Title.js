import React from "react";
import styled from "styled-components";

function Title(props) {
  return (
    <div>
      <Block>Title</Block>
    </div>
  );
}

export default Title;

const Block = styled.div`
  background-color: white;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

// background-color: dodgerblue;
