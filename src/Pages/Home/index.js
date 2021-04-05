import React from 'react'

import PokeList from '../../Components/PokeList/Container'
import useListPokemons from '../../Hooks/useListPokemons' 
import Container from 'Components/Core/Container'

export default function Home() {
 const { loading } =  useListPokemons() 
  return (
    <Container maxWidth='md'>
      <PokeList />  
   </Container>
  )
}
