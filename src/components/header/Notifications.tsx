import React from 'react'

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { NavNotifications } from './styles'

export function Notifications() {
  return (
    <NavNotifications>
        <NotificationsActiveIcon/>
        <hr />
    </NavNotifications>
  )
}
