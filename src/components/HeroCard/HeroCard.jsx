import React from 'react'
import { Link } from 'react-router-dom'
import './herocard.scss'
export const HeroCard = ( { 
        id,
        superhero,
        alter_ego,
        first_appearance,
        
} ) => {


    return (
        <div className="card">
            <div className="column-img column">
                <img src={ `./assets/heroes/${id}.jpg` } className="card-img" alt={ superhero } />
            </div> 
            <div className="column-body column">
               <header className="header-card">
                   <h3> { superhero } </h3>
               </header>
               <div className="card-text">
                   <p className="paragraph-card"> { alter_ego } </p>
                   <p className="paragraph-card"> <small> { first_appearance  } </small> </p>
               </div>
                <Link 
                    to={`/heroe/${id}`}
                    className="card-link"
                >
                    See More
                </Link>
            </div>
        </div>
    )
}
