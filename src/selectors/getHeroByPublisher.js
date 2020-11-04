import { heroes } from "../data/heroes"

export const getHeroByPublisher = ( publisher ) => {

    const publishersArr = [ 'DC Comics', 'Marvel Comics' ]

    if ( !publishersArr.includes( publisher ) ) {
        
        throw Error( `El publisher ${publisher} no existe` )
    }

    return heroes.filter( heroe => heroe.publisher === publisher )

}