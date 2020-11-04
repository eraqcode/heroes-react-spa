import { Fragment, useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { HeaderPage } from '../../components/HeaderPage/HeaderPage'
import { getHeroById } from '../../selectors/getheroById';
import marvelLogo from '../../assets/img/marvel-logo.png'
import dcLogo from '../../assets/img/dc-logo.png'
import './hero.scss'

export const HeroPage = ({history}) => {
    
    const { heroeId } = useParams();
    const heroe = useMemo(() => getHeroById( heroeId ), [heroeId] )
    
   

    if( !heroe ) {
        return <Redirect to="/" />
    }
    
    const handleClickHero = () => {
        if ( history.length <= 2 ) {
            history.push('/')
        }else {
            history.goBack();
        }
        
    }


    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;
    
    return (
       <Fragment>
           <div className="container">
                <HeaderPage
                    title={ superhero }
                />
                <div className="heroContainer">
                    <div className="hero-img">
                        <img src={`../assets/heroes/${heroeId}.jpg`} alt=""/>
                    </div>
                    <div className="hero-description">
                        <ul>
                            <li><strong>Alter Ego:</strong> { alter_ego } </li>
                            <li><strong>First Appearance:</strong> { first_appearance } </li>
                            <li><strong>Characters:</strong> { characters } </li>
                            <li>
                                {
                                    ( publisher === "Marvel Comics" )
                                    ?
                                    ( <img src={marvelLogo} alt="Marvel logo" className="img-publisher" /> )
                                    :
                                    ( <img src={dcLogo} alt="Marvel logo" className="img-publisher" /> )
                                }
                            </li>
                        </ul>

                        <button
                            onClick={ handleClickHero }
                            className="btn-hero"
                        >
                            Return
                        </button>
                    </div>
                </div>
           </div>
           
       </Fragment>
    )
}
