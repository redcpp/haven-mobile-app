import styled from "styled-components/native";

export const Container = styled.View`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.body.border};
`;
