import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BusinessIcon from '@mui/icons-material/Business';

import { NavSection } from './NavSection'
import { NavLink } from './NavLink';
import { SideBarElement } from "./styles"

export function SideBarNav() {
  return (
    <SideBarElement>
        <NavSection title="GERAL">
            <NavLink href='/dashboard' Icon={DashboardIcon}>Dashboard</NavLink>
            <NavLink href='/dashboard/business' Icon={PeopleIcon}>Empresas</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
            <NavLink href='/dashboard/form' Icon={ListAltIcon}>Formulários</NavLink>
            <NavLink href='/dashboard/update' Icon={BusinessIcon}>Empresa Local</NavLink>
        </NavSection>
    </SideBarElement>
  )
}
