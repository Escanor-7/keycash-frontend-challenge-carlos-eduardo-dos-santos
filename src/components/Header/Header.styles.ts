import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: #e0e0e0;
  margin-bottom: 2rem;

  img {
    width: 215px;
    border-radius: 1px;
  }

  @media(min-width:600px) {
    img {
      width: 215px;
    }
  }

  @media(min-width:720px) {
    img {
      width: 230px;
    }
  }
`;