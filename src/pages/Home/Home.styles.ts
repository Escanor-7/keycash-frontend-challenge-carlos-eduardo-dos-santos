import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media(min-width:900px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;