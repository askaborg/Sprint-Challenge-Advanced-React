import { useEffect } from 'react'

import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = initialize => {
    const [darkMode, setMode] = useLocalStorage("dm", initialize)

    useEffect(() => darkMode
        ? document.querySelector("body").classList.add("dark-mode")
        : document.querySelector("body").classList.remove("dark-mode"), [darkMode]
    )

    return [darkMode, setMode]
}