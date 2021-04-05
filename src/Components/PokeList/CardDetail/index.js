import React, { memo } from 'react'
import { useParams, useHistory} from 'react-router-dom'

import useSinglePokemon from 'Hooks/useSinglePokemon'
import * as ROUTES from 'Constant/Routes'
import './styles.css'


export default memo(function PokemonDetail() {
    const {name} = useParams()
    const { pokemon } = useSinglePokemon(name)
    const history = useHistory()

    const goBack = () => {
        history.push(ROUTES.HOME)
    }

    //console.log(pokemon);
     if(pokemon !== ''){
        return (   
            <>            
            <div className='pokeDex-grid'>
                <div className='pokeDex'>
                    <div className='container-circles'>
                        <span className='circle--top_big'/>
                        <span className='circle--top_small'/>
                    </div>                
                    
                        <div className='screen'>
                            <h1 className='name'>{pokemon.name}</h1>
                            <h4>- Weight: {pokemon.weight}</h4>
                            <h4>- Height: {pokemon.height}</h4>
                            <div className='align-items'>
                            <div>
                                    <h4>- Stats:</h4>
                                    {pokemon.stats.map((pokemon, index) => (
                                        <ul>
                                            <li key={index}>                                                
                                                {pokemon.base_stat + ' ' + pokemon.stat.name}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <img 
                                    src={pokemon.sprites.other['official-artwork'].front_default} 
                                    alt={pokemon.name} 
                                    className='img-pokemon'    
                                />                            
                            </div>
                        </div>
                    
                    <div className='hinge'></div>
                    <div className='container-circle'>
                        <span className='circle--bottom'/>
                        <span className='oval-green'/>
                        <span className='oval-yellow' />
                    </div>
                </div>

            </div>     
            <button className='button' onClick={goBack}>Volver</button>
            </>
        )
    } 

    return <div></div>

})
