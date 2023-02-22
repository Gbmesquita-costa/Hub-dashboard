import styled from "styled-components"

export const Banner = styled.div`
    grid-area: banner;
    display: flex;
    flex-direction: column;
    align-items: center;

    div h1 {
        margin-top: 25px;
        width: 440px;
        margin-left: 15px;
        text-align: center;
    }

    div span {
        margin-top: 70px;
        display: flex;
        width: 240px;
        text-align: center;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

export const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 600px;
    
    padding: 8px;
    background: black;

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    border-bottom: solid 3px red;

    overflow: hidden;
    
    div img {
        position: relative;
        max-width: 120px;
        margin-right: 20px;
        animation: Slide 4s infinite ease-out;
    }

    @keyframes Slide {
        0% {
            left: -30px;
        }

        30% {
            left: 50px;
        }

        40% {
            left: 50px;
        }

        50% {
            left: 55px;
        }

        100% {
            left: -30px;
        }
    }
`