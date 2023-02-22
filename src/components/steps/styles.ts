import styled from "styled-components"

interface ActiveProperty {
    activeProperty: boolean;
}

export const StepsProps = styled.div<ActiveProperty>`
    padding: 13px 20px;
    border-radius: 10px;
    background: ${(props) => props.activeProperty ? "blue" : "white"};
    color: ${(props) => props.activeProperty ? "white" : "gray"};
    scale: ${(props) => props.activeProperty ? "0.7" : "0.9"};
    margin: 10px;
`