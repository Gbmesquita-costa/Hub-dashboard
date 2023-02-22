import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`

export const Form = styled.form`
    background-color: rgba(10,23,55,0.5);
    margin-top: 20px;
    width: 90%;
    border-radius: 7px;
    padding: 30px;

    button {
        float: right;
        background: #ff266a;
        color: white;

        :hover {
            background-color: rgba(10,23,55,0.5);
        }
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 20px;

        p {
            text-align: center;
        }

        label {
            color: white;
        }

        input {
            color: white;
            padding: 0;
        }
    }

    @media (max-width: 540px) {
        margin-left: 20px;
    }
`