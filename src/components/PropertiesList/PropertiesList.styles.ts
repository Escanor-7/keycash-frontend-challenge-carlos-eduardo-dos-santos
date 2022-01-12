import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  @media(min-width:900px) {
    width: 60%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  label {
    color: var(--navy-blue);
    font-weight: 600;
    font-size: 0.9rem;
  }

  select {
    width: 115px;
    background-color: var(--white);;
    text-align: center;
    border-radius: 0.25rem;
    border: 2px solid var(--navy-blue);
    color: var(--navy-blue);
    font-weight: 600;
    cursor: pointer;
    opacity: 0.8;
    outline: none;
    margin-bottom: 0.1rem;
    
    option {
      cursor: pointer;
      border-radius: 0.25rem;
    }
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

  @media(min-width:600px) {
    padding: 1rem 1rem 1rem 0;
    display: flex;
    flex-direction: row;
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