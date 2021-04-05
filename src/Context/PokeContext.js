import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
    const initalState = {
        count: '',
        next: '',
        previous: '',
        results: []
    }
    const [allPokemons, setAllPokemons] = useState(initalState)
    const [pokemonsDetails, setPokemonsDetails] = useState([])
    const [loading, setLoading] = useState(true)
    
    const [page, setPage] = useState(0)

    const value = {
        allPokemons,
        setAllPokemons,
        page,
        setPage,
        loading,
        setLoading,
        pokemonsDetails,
        setPokemonsDetails
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
    Provider,
    Context: Context.Consumer
}
