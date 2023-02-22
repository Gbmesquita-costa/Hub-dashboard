import React from 'react'
import { NavLink } from '../SideBar/NavLink'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BusinessIcon from '@mui/icons-material/Business';

export function MobileContent() {
  return (
    <div>
        <NavLink href='/dashboard' Icon={DashboardIcon}>Dashboard</NavLink>
        <NavLink href='/dashboard/business' Icon={PeopleIcon}>Empresas</NavLink>
        <NavLink href='/dashboard/form' Icon={ListAltIcon}>Formulários</NavLink>
        <NavLink href='/dashboard/update' Icon={BusinessIcon}>Empresa Local</NavLink>
    </div>
  )
}
