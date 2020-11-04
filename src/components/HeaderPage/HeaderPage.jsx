import { Fragment } from 'react'

export const HeaderPage = ( { title } ) => {
    return (
        <Fragment>
            <header className="HeaderPage">
                <h1 className="header-page__content"> { title } </h1>
            </header>
        </Fragment>
    )
}
