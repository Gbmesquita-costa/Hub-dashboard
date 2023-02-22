import styled, { css } from "styled-components"

interface IsVisibleWithProps {
    isVisible: boolean;
}

export const Container = styled.section<IsVisibleWithProps>`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(10,23,55,0.5);

    opacity: 0;
    pointer-events: none;

    transition: .5s;
    transform: translateY(50px);

    hr {
        height: 20rem;
    }

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
        cursor: pointer;
    }
    
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center; 
        gap: 1.4rem;
        color: white;

        transform: scale(0.7);
        transition: .7s;

        div:nth-child(1) {
            width: 150px;
            height: 150px;
            margin: 0;
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        > svg {
            transform: rotate(0deg);
        }

        div {
            transform: scale(1);
        }
    `}
`