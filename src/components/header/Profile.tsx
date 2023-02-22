import React from 'react'

import { Avatar, Button } from '@mui/material'
import { UseContext } from '../../context/hook'

import { ProfileProps } from './styles'

export function Profile() {
    const { user, LogOut } = UseContext()

    return (
        <ProfileProps>
            <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>

            <Avatar
                alt='Gabriel'
                src='https://github.com/Gbmesquita-costa.png'
            />

            <div>
                <Button
                    type="button"
                    color="inherit"
                    variant="outlined"
                    onClick={LogOut}
                >
                    LogOut
                </Button>
            </div>
        </ProfileProps>
    )
}
