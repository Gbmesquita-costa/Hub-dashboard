import React, { useState } from 'react'

import { RiMenu3Fill } from "react-icons/ri"

import Logo from './Logo'

import { HeaderMain } from './styles'
import { SearchBox } from './SearchBox'

import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { MenuMobile } from '../MenuMobile/MenuMobile'

export default function Header() {
  const [ toggleIsVisible, setToggleIsVisible ] = useState<boolean>(false)
  
  return (
    <HeaderMain>
        <MenuMobile
          menuIsVisible={toggleIsVisible}
          setMenuIsVisible={setToggleIsVisible}
        />
        <Logo/>
        <SearchBox/>
        <div>
          <Notifications/>
          <Profile/>
        </div>
        <RiMenu3Fill size={30} onClick={() => setToggleIsVisible(true)} color="white"/>
    </HeaderMain>
  )
}
