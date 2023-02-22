import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   min-width: 320px;
   div {
    button {
      background: white;
    }
    padding: 20px;
  }

  @media (max-width: 540px) {
    margin-left: -25px;
    overflow: scroll;
  }
`;

export const UserTable = styled.table`
  background-color: rgba(10,23,55,0.5);
  margin-top: 20px;
  width: 100%;
  color: white;
  border-radius: 7px;

  thead th {
    text-align: left;
    padding: 15px;
  }

  tbody td {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }

  strong {
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: small;
  }

  button {
    background: #ff266a;
    color: white;
    font-weight: bold;
    border: 0;
    padding: 6px;
  }

  @media (max-width: 1024px) {
    tbody td {
      padding: 10px;
    }

    thead th {
      padding: 12px;
    }
  }

  @media (max-width: 414px) {
    thead th:nth-child(7) {
      display: none;
    }

    tbody td:nth-child(7) {
      display: none;
    }
  }
`;