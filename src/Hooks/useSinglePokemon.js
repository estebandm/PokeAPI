import { useContext, useEffect, useState } from 'react'

import {Context as PokeContext } from 'Context/PokeContext'

export default function useSinglePokemon(name) {
    const { pokemonsDetails } = useContext(PokeContext)
    const [pokemon, setPokemon] = useState('')

    const getPokemon = async (url) => {
        const response = await fetch(url)
        const dataPokemon = await response.json()
        setPokemon(dataPokemon)
    }

    useEffect(() => {
        if (pokemonsDetails.length === 0){
            getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        }
        else{
            const dataPokemon = pokemonsDetails.find(pokemon => pokemon.name === name)
            setPokemon(dataPokemon)
        }
    }, [])

    return {
        pokemon
    }
}
