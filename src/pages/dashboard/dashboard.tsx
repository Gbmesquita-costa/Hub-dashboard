import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { parseCookies } from 'nookies'

import Header from '../../components/header/header'
import { SideBar } from '../../components/SideBar/SideBar'

import { DashboardMain, Container, OutletContainer } from './styles'

export function Dashboard() {
    const navigate = useNavigate()

    useEffect(() => {
        const { "user_token": token } = parseCookies()

        if (!token) {
            navigate("/")
        }

    }, [])

    return (
        <>
            <Header />
            <Container>
                <DashboardMain>
                    <div>
                        <SideBar />
                    </div>
                </DashboardMain>
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </Container>
        </>
    )
}
