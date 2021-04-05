import React, { memo } from 'react'

import PokeDetail from 'Components/PokeList/CardDetail'
import Container from 'Components/Core/Container'

export default memo(function PokemonDetail() {
    return (
        <Container maxWidth='md'>
            <PokeDetail/>
        </Container>
    )
})
