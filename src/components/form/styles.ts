import styled from "styled-components"

const colors = {
    form_background: "#0485FF",
    title_color: "white",
    input_shadow: "#E3DFDF",
    button_background: "linear-gradient(90deg, rgb(92, 201, 157) 8.17%, rgb(109, 231, 184) 95.91%)"
}

export const Form = styled.form`
    background: ${colors.form_background};
    grid-area: form;
    width: 100%;
    height: 100%;
    min-width: 320px;
    padding-right: 15px;
`

export const NameProps = styled.div`
    margin-bottom: 50px;

    h1 {
        color: white;
        font-weight: bold;
    }
`

export const StepsProps = styled.div`
    margin-bottom: 30px;
    margin-top: 100px;

    @media (max-width: 1024px) {
        margin-left: 110px;
        margin-top: 0px;
    }

    @media (max-width: 820px) {
        margin-left: 140px;
    }

    @media (max-width: 540px) {
        margin-left: 20px;
    }

    @media (max-width: 414px) {
        margin-left: -35px;
    }

    @media (max-width: 393px) {
        margin-left: -40px;
        font-size: 0.6rem;
    }
`

export const Hub_icon = styled.div`
    padding-top: 80px;

    img {
        width: 170px;
    }
`

export const FormContainer = styled.div`
    @media (max-width: 1024px) {
        width: 100%;
        margin-left: 140px;
    }

    @media (max-width: 820px) {
        margin-left: 185px;
    }

    @media (max-width: 540px) {
        margin-left: 70px;
    }

    @media (max-width: 414px) {
        margin-left: 20px;
    }

    @media (max-width: 393px) {
        margin-left: 5px;
    }
`