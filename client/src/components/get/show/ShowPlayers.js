import React from 'react'

import { useDarkMode } from '../../../my-hooks/useDarkMode'
import { ShowCard } from './index'
import './ShowPlayers.css'

export const ShowPlayers = props => {
    const { players } = props
    const [darkMode, setMode] = useDarkMode(false)
    const switchMode = e => {
        e.preventDefault()
        setMode(!darkMode)
    }

    return (
        <div>
            <button onClick={switchMode}>Switch Mode</button>
            <div>
                {players.map(card => 
                    <div key={card.id}>
                        <ShowCard card={card} />
                    </div>)}
            </div>
        </div>
    )
}