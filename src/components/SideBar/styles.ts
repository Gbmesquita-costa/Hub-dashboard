import styled from "styled-components"

interface ActiveLink {
    active: boolean;
}

export const SideBarComponent = styled.aside`
    width: 300px;
    margin-right: 20px;

    @media (max-width: 1280px) {
        width: 250px;
    }

    @media (max-width: 912px) {
        display: none;
    }    
`

export const SideBarElement = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 1280px) {
        padding-left: 60px;
    }
`

export const Text = styled.p`
    font-weight: bold;
    color: #ff266a;
    font-size: small;
`

export const SideBarLinks = styled.div`
    display: flex;
    align-items: stretch;
    margin-top: 16px;
`

export const LinkProps = styled.a`
    display: flex;
    align-items: center;
    color: white;
`

export const TextLinks = styled.p<ActiveLink>`
    margin-left: 5px;
    color: ${(props) => props.active ? "#ff266a" : "white"};
    font-weight: ${(props) => props.active ? "900" : "300"};
`