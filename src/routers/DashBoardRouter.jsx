import { Route, Switch } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar'
import { HomePage } from '../pages/Home/HomePage'
import { AboutPage } from '../pages/About/AboutPage'
import { MarvelPage } from '../pages/Marvel/MarvelPage'
import { DcPage } from '../pages/Dc/DcPage'
import { SearchPage } from '../pages/Search/SearchPage'
import { HeroPage } from '../pages/Hero/HeroPage';
import { Footer } from '../components/Footer/Footer';

export const DashBoardRouter = () => {
    return(
        <>
            <NavBar/>
            
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/about" component={ AboutPage } />
                <Route exact path="/marvel" component={ MarvelPage } />
                <Route exact path="/dc" component={ DcPage } />
                <Route exact path="/heroe/:heroeId" component={ HeroPage } />
                <Route exact path="/search" component={ SearchPage } />
            </Switch>
            <Footer/>
            
        </>
    )
}