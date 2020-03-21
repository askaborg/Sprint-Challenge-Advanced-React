import React from 'react'

export const ShowCard = props => {
    const { name, country, searches } = props.card
    
    return (
        <h4>
            {name} from {country} with {searches} searches.
        </h4>
    )
}
