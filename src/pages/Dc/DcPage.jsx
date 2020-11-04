import { Fragment } from 'react'
import { HeaderPage } from '../../components/HeaderPage/HeaderPage'
import { HeroList } from '../../components/HeroeList/HeroList'

export const DcPage = () => {
    return (
        <Fragment>
            <main className="main container">
                <HeaderPage
                    title="DC Heroes"
                />

                <HeroList
                    publisher="DC Comics"
                />
            </main>
        </Fragment>
    )
}
