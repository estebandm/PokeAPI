import React, { memo } from 'react'

import * as IMAGES from 'Constant/Images'
import './styles.css'

export default memo(function Layout({children}) {
    return (
        <>       
        <header className='header'>
            <img
                src={IMAGES.POKEMON_TITLE}
                alt='title'
                className='header-img'
            />
        </header>
            {children}
        </>
    )
})
