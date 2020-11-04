import { Fragment } from 'react'
import { Slider } from '../../components/Slider/Slider'
import marvelLogo from '../../assets/img/marvel-logo.png'
import dcLogo from '../../assets/img/dc-logo.png'
import './home.scss'

export const HomePage = () => {
    return (
        <Fragment>
            <main className="main">
                <section className="banner">
                    <Slider/>
                </section>
                <section className="story">
                    <div className="story__content">
                        <div className="story__marvel">
                            <article className="story___article-marvel">
                                <header className="story__header">
                                    <h3> Marvel </h3>
                                </header>
                                <p className="story__paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis incidunt fugit, odit veniam possimus minima velit quo cum autem! Laboriosam autem esse at ex quod nostrum dolorem modi quisquam!.
                                    Ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolore iusto minus fuga. Beatae eveniet corporis consequatur eum ratione, culpa alias quidem sunt eos, id esse rem minima laborum.
                                </p>
                                <figure>
                                    <img src={marvelLogo} alt="Marvel Logo" className="story__img"/>
                                </figure>
                            </article>
                        </div>
                        <div className="story__dc">
                            <article className="story__article-dc">
                                <header className="story__header">
                                    <h3> DC </h3>
                                </header>
                                <p className="story__paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis incidunt fugit, odit veniam possimus minima velit quo cum autem! Laboriosam autem esse at ex quod nostrum dolorem modi quisquam!.
                                    Ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolore iusto minus fuga. Beatae eveniet corporis consequatur eum ratione, culpa alias quidem sunt eos, id esse rem minima laborum.
                                </p>
                                <figure>
                                    <img src={dcLogo} alt="DC logo" className="story__img"/>
                                </figure>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}
