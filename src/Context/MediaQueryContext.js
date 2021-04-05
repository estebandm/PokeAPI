import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const xs = windowWidth < 600 
    const sm = windowWidth >= 600 && windowWidth < 960
    const md = windowWidth >= 960 && windowWidth < 1280
    const lg = windowWidth >= 1280 && windowWidth < 1920
    const xl = windowWidth >= 1920


    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    }, [])

    const value = {
        xs,
        sm,
        md,
        lg,
        xl
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
    Provider,
    Context: Context.Consumer
}
