import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { SearchBoxElement } from "./styles"

export function SearchBox() {
  return (
    <SearchBoxElement>
      <input 
        type="text" 
        placeholder="Buscar na plataforma" 
      />
      <SearchIcon/>
    </SearchBoxElement>
  )
}
