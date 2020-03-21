import { useState } from 'react'

export const useLocalStorage = (key, initialize) => {
    const [localValue, setLocalValue] = useState(() => window.localStorage.getItem(key) 
        ? JSON.parse(window.localStorage.getItem(key)) 
        : initialize
    )    
    
    const setStorage = store => {
        setLocalValue(store)
        window.localStorage.setItem(key, JSON.stringify(store))
    }

    return [localValue, setStorage]
}