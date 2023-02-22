import styled from "styled-components"

export const Input = styled.div`
    ::placeholder {
        color: white;
        font-weight: bold;
    }

    display: flex;
    flex-direction: column;

    label {
        color: white;
    }
    
    input {
        color: white;
        width: 400px;
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