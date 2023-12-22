import styled from "styled-components";

export const ButtonStyle = styled.button<{
  $floatRight?: boolean;
  $floatLeft?: boolean;
  $backgroundColor?: string;
  color?: string;
}>`
  margin: 0.5rem;
  margin-left: ${(props) => (props.$floatRight ? "auto" : "initial")};
  margin-right: ${(props) => (props.$floatLeft ? "auto" : "initial")};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#f5f5f5"};
  color: ${(props) => (props.color ? props.color : "#000")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  transition: transform 1s ease 0s;

  &:hover {
    transform: scale(1.1);
  }
`;
