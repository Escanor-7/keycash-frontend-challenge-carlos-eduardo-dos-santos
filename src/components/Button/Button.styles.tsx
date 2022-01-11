import styled from "styled-components";

export const Button = styled.button`
  
  &.search-filters {
    width: 80%;
    background-color: none;
    padding: 0.5rem;
    outline: none;
    color: var(--navy-blue);
    font-weight: 700;
    border: 2px solid var(--navy-blue);
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;

    &:hover {
      -webkit-box-shadow: 0px 0px 2px 2px rgba(99,113,135,0.45); 
      box-shadow: 0px 0px 5px 2px var(--navy-blue);
    }
  }

  
  &.apply-filters {
    width: 80%;
    background-color: none;
    padding: 0.5rem;
    outline: none;
    color: #008584;
    font-weight: 800;
    border: 2px solid #008584;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    z-index: 1;

    &:hover {
      background-color: var(--white-secondary);
      -webkit-box-shadow: 0px 0px 2px 2px rgba(99,113,135,0.45); 
      box-shadow: 0px 0px 5px 2px #008584;
    }
  }
`;