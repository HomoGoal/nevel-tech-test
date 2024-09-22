import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import arrow from '../img/arrow.png'

import { listHero } from '../data/hero';

import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <section className="hero">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                {listHero.map((item,index) => 
                    <SwiperSlide key={index}>
                        <div className="hero-item">
                            <img src={item.img} className="hero-image" alt="hero"/>
                            <div className="hero-item-content">
                                <p className="p6">{item.name}</p>
                                <button className="hero-item-button">
                                    <p className="p7">Game Details</p>
                                    <img src={arrow} alt="icon"/>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default Hero;