import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

export default memo(function CardPokemon({ img, name}) {

    const history = useHistory()

    const showDetailPokemon = () => {
        history.push(`/poke/detail/${name}`)
    }

    return (
        <div className="card" onClick={showDetailPokemon} >
            <h3 className='title'>{name}</h3>
            <img
                src={img}
                alt={name}
                className='img-pokemon'
            />
        </div>
    )
})

