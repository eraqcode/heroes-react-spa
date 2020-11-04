import { Fragment, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage/HeaderPage';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import queryString from 'query-string'
import './search.scss'
export const SearchPage = ({history}) => {

    const location = useLocation();
    const { q = "" } = queryString.parse(location.search)
    
    const [ formValue, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValue;
    
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    const heroesFiltered = useMemo(() => getHeroByName( q ), [q] );


    return (
        <Fragment>
            <main className="container">
                <HeaderPage
                    title="Search"
                />
                <section className="search">
                    <div className="search__form">
                        <form onSubmit={ handleSubmitSearch } >
                            <input
                                type="text"
                                name="searchText"
                                placeholder="Search a hero"
                                vakue={ searchText }
                                onChange={ handleInputChange }
                            />
                            <button
                                type="submit"
                                className="btn__search"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="search__results">
                        <h4> Results </h4>
                        <hr/>
                        {
                            ( q === '' )
                            &&
                            (
                                <div className="alert__info alert">
                                    You most search a heroe
                                </div>
                            )
                        }
                        {
                            ( q !== '' && heroesFiltered.length === 0 )
                            &&
                            (
                                <div className="alert__error alert">
                                    The heroe <strong> { q } </strong> do not exist
                                </div>
                            )
                        }
                        {
                            heroesFiltered.map( heroe => (
                                <HeroCard
                                    key={heroe.id}
                                    {...heroe}
                                />
                            ) )
                        }
                    </div>
                </section>
            </main>
            
        </Fragment>
    )
}
