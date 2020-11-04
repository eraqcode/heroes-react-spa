import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({
    component: Component,
    isAuthenticated,
    ...rest

}) => {
    
    localStorage.setItem( 'lastPath', rest.location.pathname )
    return (
        <Route { ...rest }
            component= { props => (
                ( isAuthenticated )
                ?
                ( <Component {...props} /> )
                :
                <Redirect to='/login' />
            ) }
        />
    )
}

PrivateRoutes.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}
