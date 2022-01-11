import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  /* background-color: #e0e0e0; */
  flex-direction: column;
  width: 95%;

  /* Arrows carousel config */
  div.rec-carousel {
    button.rec-arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      border: 1px solid var(--light-gray);
      color: var(--light-gray);
      min-width: fit-content;

      &:first-child {
        margin-left: 1rem;
      }

      &:last-child {
        margin-right: 1rem;
      }

      &:hover {
        background-color: var(--light-gray);
        color: var(--white-ice);
      }

      &:focus {
        background-color: var(--light-gray);
        color: var(--white-ice);
      }
    }
  }

  @media(min-width:900px) {
    width: 50%;
  }
`;

export const PropertiesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e4ded0;
  border: 0.1px solid var(--light-gray);
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  height: fit-content;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(99,113,135,0.45); 
  box-shadow: 0px 0px 10px 2px #cccccc;

  img {
    width: 100%;
    height: 250px;
    margin-bottom: 0.4rem;
    border-radius: 0.1rem;
  }

  @media(min-width:600px) {
    padding: 1rem;
    display: flex;
    flex-direction: row;

    img {
      width: 50%;
    }
  }
`;

export const DescriptionTitle = styled.p`
  color: var(--light-gray);
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 600;
    color: #434d53;
  }

  @media(min-width:600px) {
    margin: 0 0rem 0.8rem 1rem;
  }
`;