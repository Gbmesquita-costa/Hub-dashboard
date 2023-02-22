import styled from "styled-components"

export const HeaderMain = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 1400px;
    height: 110px;
    margin: 0 auto;
    margin-top: 10px;
    padding-left: 20px;

    div {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    svg {
        cursor: pointer;
    }

    @media (max-width: 1280px) {
        max-width: 1200px;
    }

    @media (max-width: 1024px) {
        max-width: 960px;
    }

    @media (max-width: 912px) {
        max-width: 730px;
    }

    @media (max-width: 540px) {
        max-width: 410px;
    }

    @media (max-width: 414px) {
        max-width: 355px;
    }
`

export const Hub_icon = styled.div`
    img {
        width: 170px;
    }
`

export const LogoText = styled.header`
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: tight;
    width: 100px;
    color: white;

    p {
        color: #ff266a;
        margin-left: 10px;
        padding-top: 9px;
    }
`

export const SearchBoxElement = styled.div`
    display: flex;
    flex: 1; 
    padding: 10px 10px;
    max-width: 408px;
    align-items: center;
    color: gray;
    position: relative;
    background: white;
    border-radius: 30px;

    input {
        width: 100%;
        height: 100%;
        color: black;
        padding: 0 10px;
        background: white;
        margin-right: 10px;
        outline: none;
        border: white;
    }

    svg {
        :hover {
            font-weight: bold;
            color: #ff266a;
        }
    }

    @media (max-width: 1280px) {
        left: 90px;
        margin-right: 100px; 
    }

    @media (max-width: 1024px) {
        left: 90px; 
        max-width: 200px;
    }

    @media (max-width: 912px) {
        display: none;
        background: none;

        input {
            display: none;
            background: none;
        }

        svg {
            display: none;
        }
    }
`

export const ProfileProps = styled.div`
    display: flex;
    align-items: center;
    color: white;

    div {
        display: flex;
        flex-direction: column;
        margin-right: 40px;

        button {
            padding-right: 15px;

            :hover {
                background: skyblue;
            }
        }

        p {
            font-weight: 500;
        }

        p:nth-child(2) {
            font-size: small;
        }
    }

    @media (max-width: 540px) {
        div {
            display: none;
        }
    }
`

export const NavNotifications = styled.div`
    margin: 0 20px;
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    border-right-width: 10px;
    border-color: white;

    svg {
        color: white;
    }

    hr {
        margin-left: 30px;
        height: 2rem;
        background: #ff266a;
    }
`