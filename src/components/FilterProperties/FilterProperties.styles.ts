import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width:900px) {
    width: 30%;
    align-items: center;
  }
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white-ice);
  padding: 1rem;
  border-radius: 0.25rem;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TwoOptionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const FilterItem = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  input {
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    color: var(--light-gray);
    font-size: 1.2rem;

    &:focus {
      -webkit-box-shadow: 0px 0px 5px 5px rgba(99,113,135,0.45); 
      box-shadow: 0px 0px 5px 2px var(--navy-blue);
    }
  }
`;

export const FilterTitle = styled.p`
  color: var(--light-black);
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const MultipleItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  p {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;