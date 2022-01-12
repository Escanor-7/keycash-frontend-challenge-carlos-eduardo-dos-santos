import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  
   /* Arrows carousel config */
   div.rec-carousel {
    button.rec-arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 20px;
      font-size: 1rem;
      border: 1px solid var(--light-gray);
      color: var(--light-gray);
      min-width: fit-content;

      &:hover {
        background-color: var(--light-gray);
        color: var(--white-ice);
      }

      &:focus {
        background-color: var(--light-gray);
        color: var(--white-ice);
      }

      @media(min-width:900px) {
        &:first-child {
          margin-left: 1rem;
        }

        &:last-child {
          margin-right: 1rem;
        }
      }
    }
  }

  @media(min-width:600px) {
    width: 60%;
  }

  @media(min-width:900px) {
    width: 55%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 0.4rem;
  border-radius: 0.1rem;
`;