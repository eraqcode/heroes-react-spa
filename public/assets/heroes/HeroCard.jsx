import React from 'react'

export const HeroCard = ( { 
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
} ) => {

const ruta = '../../assets/img/'
    return (
        <div className="card">
            <div className="column-img">
            <img src={ `./assets/heroes/${id}.jpg` } className="card-img" alt={ superhero } />
            </div> 
            <div className="column-body">
                { superhero }
            </div>
        </div>
    )
}
