import { useEffect, useCallback, useContext, useState } from 'react'
import { Context as PokeContext } from '../Context/PokeContext'

export default function useListPokemons() {
    const { 
        allPokemons,
        setAllPokemons, 
        pokemonsDetails,
        setPokemonsDetails,
        loading,
        setLoading,
        page,
        setPage 
    } = useContext(PokeContext)    
    

    const [reload, setReload] = useState(true)
    const limit = 5

    const getDetailsPokemons = useCallback(
        async (urlDetailPokemon) => {
            try{
                const response = await fetch(urlDetailPokemon)
                const pokemonDetail = await response.json()
              /*   setPokemonsDetails(prev => 
                    prev.length === 1 ? prev.push(pokemonDetail) : prev.concat(pokemonDetail)
                )        */      
                setPokemonsDetails(prev => 
                    prev.concat(pokemonDetail)
                )                
            }
            catch(err){
                console.log(err);
            }
        },
    [])

    const getPokemons = useCallback(
        async (url = '') => {
            try {
                setLoading(true)                
                const response = await fetch(url) 
                const data = await response.json()    
                await data.results.map(pokemon => getDetailsPokemons(pokemon.url))   
                //setAllPokemons(prev => ({count: data.count, next: data.next, previous: data.previous, results: prev.results.concat(data.results)}))
                setAllPokemons(prev => ({ ...data, results: prev.results.concat(data.results) }))
                setLoading(false)
                setReload(false)
            } catch (err) {
                console.log(err);
            }
        },
    [])

    useEffect(() => {
        if (allPokemons.results.length === 0 && page === 0) {
            getPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)            
        }else{
            getPokemons(allPokemons.next)
        }
    }, [page])


    return{
        allPokemons,
        setAllPokemons,
        pokemonsDetails,
        setPokemonsDetails,
        loading,
        setLoading,
        setPage,
        page,
        reload
    }
}
