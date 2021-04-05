import React, { memo, useContext } from 'react'

import {Context as PokeContext} from 'Context/PokeContext'
import CardPokemon from '../Card'

import './styles.css'

export default memo(function PokeList() {

    const { pokemonsDetails, setPage, page } = useContext(PokeContext)
    const handleOnClick =  () => {
        setPage(prevPage => prevPage + 1)    
    }
    
    localStorage.setItem('page', page)

    return (
        <div>                        
            <div className="grid">
                {pokemonsDetails.map(pokemon => 
                    (                        
                        <CardPokemon                            
                            key={pokemon.id}
                            img={pokemon.sprites.other.dream_world.front_default}
                            name={pokemon.name}
                        />
                    )
                )}              
            </div>
            <button className='button' onClick={handleOnClick}>Cargar más pokemones...</button>            
        </div>
    )
})
