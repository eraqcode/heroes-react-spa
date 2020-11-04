import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import './login.scss'
export const LoginPage = ({history}) => {

    const { dispatch } = useContext(AuthContext)
    
    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
         dispatch( { 
             type: types.login, 
             payload: { name: 'Erik A' } 
         } )
         history.push(lastPath)
    }

    return (
        <Fragment>
            <div className="container">
                <main>
                    <header>
                        <h1> Log in </h1>
                    </header>

                    <hr/>

                    <button 
                        onClick={ handleLogin }
                        className="btn-logout"
                    >
                        Log In
                    </button>
                </main>
            </div>
        </Fragment>
    )
}
