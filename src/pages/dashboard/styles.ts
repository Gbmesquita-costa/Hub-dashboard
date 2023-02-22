import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    color: white;
    max-width: 1400px;
    margin: 10px auto;
`

export const DashboardMain = styled.div`
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 10px auto;
        text-decoration: none;
    }
`

export const OutletContainer = styled.main`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    margin-bottom: 30px;
    padding-right: 20px;

    @media (max-width: 1280px) {
        max-width: 900px;
    }

    @media (max-width: 912px) {
        max-width: 700px;
        margin-left: 130px;
        margin-top: 50px;
    }

    @media (max-width: 820px) {
        margin-left: 70px;
    }

    @media (max-width: 768px) {
        margin-left: 40px;
    }
`