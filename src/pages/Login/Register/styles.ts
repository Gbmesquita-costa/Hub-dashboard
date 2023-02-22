import styled from "styled-components"

export const RegisterContainer = styled.div`
    width: 100%;
`

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    margin: 140px auto;
    background: white;
    color: black;

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 550px;

    padding: 25px;
    border-radius: 16px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 13px;

        input {
            padding: 20px;
        }
    }

   
    button {
        margin-top: 50px;
        background: #ff266a;
        color: white;
        width: 130px;
    
        :hover {
            background: skyblue;
        }
    }
`

export const HubImage = styled.div`
    width: 100%;

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        span {
            font-size: 1.2rem;
        }
    }
`