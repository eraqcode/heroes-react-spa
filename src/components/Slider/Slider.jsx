import React from 'react';

import bannerImg1 from '../../assets/img/banner-img-1.jpeg'
import bannerImg2 from '../../assets/img/banner-img-2.jpg'
import bannerImg3 from '../../assets/img/banner-img-3.jpeg'
import bannerImg4 from '../../assets/img/banner-img-4.jpg'
import bannerImg5 from '../../assets/img/banner-img-5.jpg'
import bannerImg6 from '../../assets/img/banner-img-6.jpg'

import './slider.scss'

export const Slider = () => {

    const imgArr = [ bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6,  ]

    return (
        <div className="banner__content">
            <ul className="banner__list">

                {
                    imgArr.map( (img, index) => {
                        return(
                            <li key={index} className="banner__item">
                                <img src={img} alt="banner img" className="banner__img"/>
                            </li>
                        )
                    } )
                }
                
            </ul>
        </div>
    )
}
