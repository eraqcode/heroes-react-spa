
import { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from '../HeroCard/HeroCard'
import './herolist.scss'

export const HeroList = ( { publisher } ) => {
    
    const heroes =  useMemo(() => getHeroByPublisher( publisher ), [publisher] )
   

    return (
        <>
            <div className="container">
                <div className="card-container">
                    {
                        heroes.map( heroe => {
                            return(
                            
                                <HeroCard
                                    key={ heroe.id }
                                    { ...heroe }
                                />
                                
                            )
                        } )
                    }
                </div>
            </div>
                
            
        </>
    )
}
