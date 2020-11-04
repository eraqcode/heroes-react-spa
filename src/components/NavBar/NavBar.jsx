import { useState, useEffect, useContext } from 'react'
import { Link, NavLink, useHistory } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { useViewport } from '../../hooks/useViewport'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import './navbar.scss'

export const NavBar = () => {

    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false)
   
    const {width} = useViewport()
    
    const { user, dispatch } = useContext(AuthContext)
    
    const handleLogOut = () => {
        history.replace('/login');

        dispatch({ type: types.logout })
        
        console.log("Click")
    }

    useEffect(() => {
        const isResponsive = () => {
            if (width > 768) {
                return setShowMenu( true )
            }else{
                return setShowMenu(false)
            }
        }    
        isResponsive()    
    }, [width])
    return (
        <nav>
            
                <div className="navbar__header">
                    <header>
                    <Link to="/" className="icon__link"> <h1> HeroesApp </h1> </Link>
                    </header>
                </div>
                <div className={ showMenu ? "nav-menu-active " : "nav-menu-desactive" }>
                    <ul className="navbar">
                        <li className="nav__item">
                            <NavLink
                                activeClassName="active"
                                exact
                                className="nav__link"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                activeClassName="active"
                                exact
                                className="nav__link"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                activeClassName="active"
                                exact
                                className="nav__link"
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                activeClassName="active"
                                exact
                                className="nav__link"
                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                activeClassName="active"
                                exact
                                className="nav__link"
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="btn__toggle">
                    <IconContext.Provider value={{ className: "react-icons" }}>
                        <button
                            onClick={ () => setShowMenu( !showMenu ) }
                        >
                            {
                                showMenu ? <FaTimes/> : <FaBars/>
                            }
                        </button>
                    </IconContext.Provider>
                </div>
                <div className="user">
                    <span>
                        { user?.name }
                    </span>
                    <button 
                        onClick={ handleLogOut }
                        className="logout__btn" 
                    > 
                        Log out
                    </button>
                </div>
            
        </nav>
    )
}
