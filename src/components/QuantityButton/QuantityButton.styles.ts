import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--navy-blue);
  width: 40px;
  height: 40px;
  opacity: 0.8;
  border-radius: 50%;
  font-size: 1.2rem;
  
  span {
    color: var(--white);
    padding: 0.5rem;

    &:hover {
      color: var(--navy-blue);
      font-weight: 600;
    }
    :focus {
      color: var(--navy-blue);
    }
  }

  &:hover {
    opacity: 0.7;
    background-color: var(--white);
    border: 2px solid var(--navy-blue);
    -webkit-box-shadow: 0px 0px 5px 5px rgba(99,113,135,0.45); 
    box-shadow: 0px 0px 5px 2px var(--navy-blue);
  }

  :focus {
    opacity: 0.7;
    background-color: var(--white);
    border: 2px solid var(--navy-blue);
    -webkit-box-shadow: 0px 0px 5px 5px rgba(99,113,135,0.45); 
    box-shadow: 0px 0px 5px 2px var(--navy-blue);
  }
`;

export const QuantityButton = styled.input`
  display: none;
`;