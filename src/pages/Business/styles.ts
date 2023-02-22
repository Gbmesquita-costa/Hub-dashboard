import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   div {
    button {
      background: white;
    }
    padding: 20px;
  }

  @media (max-width: 540px) {
    margin-left: -10px;
  }

  @media (max-width: 393px) {
    margin-left: -26px;
  }

  @media (max-width: 375px) {
    margin-left: -34px;
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
    padding: 25px;
  }

  tbody td {
    padding: 25px;
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

  @media (max-width: 414px) {
    thead th:nth-last-child(1) {
      display: none;
    }

    tbody td:nth-last-child(1) {
      display: none;
    }
  }
`;