import React, { useEffect } from 'react'
import { Container } from './styles';

import { AiOutlineClose } from "react-icons/ai"
import { UseContext } from '../../context/hook';
import { Avatar, Button } from '@mui/material';
import { MobileContent } from './MobileContent';

interface MobileWithProps {
  menuIsVisible: boolean;
  setMenuIsVisible:  any;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: MobileWithProps) {
  const { user, LogOut } = UseContext()

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto"
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <AiOutlineClose
        size={45}
        color="white"
        onClick={() => setMenuIsVisible(false)}
      />

      <MobileContent />
      
      <hr /> 
      <div>
        <div>
          <Avatar
            alt='Gabriel'
            src='https://github.com/Gbmesquita-costa.png'
          />
        </div>

        <p>{user?.name}</p>
        <p>{user?.email}</p>

        <Button
          type="button"
          color="inherit"
          variant="outlined"
          onClick={LogOut}
        >
          LogOut
        </Button>
      </div>
    </Container>
  )
}
