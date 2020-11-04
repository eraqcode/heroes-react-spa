import { Fragment } from 'react'
import { HeaderPage } from '../../components/HeaderPage/HeaderPage'
import { HeroList } from '../../components/HeroeList/HeroList'
export const MarvelPage = () => {
    return (
        <Fragment>
            <main className="main container">
                <HeaderPage
                    title="Marvel Heroes"
                />

                <HeroList
                    publisher="Marvel Comics"
                />
            </main>
        </Fragment>
    )
}
