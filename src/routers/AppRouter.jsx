import { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { LoginPage } from '../pages/Login/LoginPage'
import { DashBoardRouter } from './DashBoardRouter'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoute'

export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            
            <Switch>

                
                <PublicRoutes 
                    exact 
                    path="/login"
                    component={ LoginPage } 
                    isAuthenticated={user?.logged}
                />
                
                <PrivateRoutes 
                    path="/" 
                    component={ DashBoardRouter } 
                    isAuthenticated={user?.logged}
                />

            </Switch>
            
         
        </Router>
    )
}
