import styled from "styled-components"

export const Input = styled.div`
    display: flex;
    flex-direction: column;

    ::placeholder {
        color: white;
        font-weight: bold;
    }

    label {
        color: white;
    }

    input {
        color: white;
        width: 350px;
        margin-top: 20px;
    }
`

export const ButtonProps = styled.div`
    display: flex;
    flex-direction: row;

    button {
        margin: 10px;
    }
`