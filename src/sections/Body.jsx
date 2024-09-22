import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import GameCard from "../components/GameCard";
import CategoryCard from "../components/CategoryCard";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import search from '../img/search.png'
import leftArrow from '../img/left-arrow.png'
import rightArrow from '../img/right-arrow.png'
import plus from '../img/plus.png'
import downArrow from '../img/down-arrow.png'

import { listGame, listCategory, listItem } from "../data/body";

const Body = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [activeNavGame, setActiveNavGame] = useState([true, false]);
    const [activeNavCate, setActiveNavCate] = useState([true, false]);

    const swiperCategoryRef = useRef();
    const swiperGameRef = useRef();

    const handleCategoryNavigation = (value) => {
        if (value === 'next') {
            swiperCategoryRef.current?.slideNext()
        } else {
            swiperCategoryRef.current?.slidePrev()
        }
    }

    const handleGameNavigation = (value) => {
        if (value === 'next') {
            swiperGameRef.current?.slideNext()
        } else {
            swiperGameRef.current?.slidePrev()
        }
    }

    return (
        <section className="body">
            <div className="body-aside">
                <div className="body-aside-input">
                    <img src={search} alt="icon"/>
                    <input placeholder="Search" className="p8"/>
                </div>
                {listItem.map((item,index) => <button onClick={() => setActiveItem(index)} className={`body-aside-button ${activeItem === index && "active"} ${item.type === 'mobile' && "body-aside-button-mobile"}`} key={index}>
                    <img src={item.img} alt="icon"/>
                    <p className="p8">{item.label}</p>
                </button>)}
            </div>
            <div className="body-content">
                <div className="body-game">
                    <div className="body-game-header">
                        <p className="p9">HOT GAME</p>
                        <div className="swiper-arrow">
                            <button onClick={() => handleGameNavigation('prev')} className={`${activeNavGame[0] && "disabled"}`}>
                                <img src={leftArrow} alt="icon"/>
                            </button>
                            <button onClick={() => handleGameNavigation('next')} className={`${activeNavGame[1] && "disabled"}`}>
                                <img src={rightArrow} alt="icon"/>
                            </button>
                        </div>
                        <div className="body-game-sort">
                            <p className="p13">Release Date</p>
                            <p className="p14">AZ</p>
                            <img src={downArrow} alt="icon"/>
                        </div>
                    </div>
                    <div className="body-game-list">
                        <Swiper
                            onBeforeInit={(swiper) => {
                                swiperGameRef.current = swiper;
                            }}
                            spaceBetween={0}
                            slidesPerView={1}
                            breakpoints={{
                                1280: {
                                    spaceBetween: 20,
                                    slidesPerView: 2,
                                }
                            }}
                            onSlideChange={() => setActiveNavGame([swiperGameRef.current.isBeginning,swiperGameRef.current.isEnd])}
                            modules={[Autoplay, Navigation]}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false,
                            // }}
                        >
                            {listGame.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <GameCard item={item} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
                <div className="body-category">
                    <div className="body-category-header">
                        <p className="p9">HOTTEST CATEGORY</p>
                        <div className="swiper-arrow">
                            <button onClick={() => handleCategoryNavigation('prev')} className={`${activeNavCate[0] && "disabled"}`}>
                                <img src={leftArrow} alt="icon"/>
                            </button>
                            <button onClick={() => handleCategoryNavigation('next')} className={`${activeNavCate[1] && "disabled"}`}>
                                <img src={rightArrow} alt="icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="body-category-list">
                        <Swiper
                            onBeforeInit={(swiper) => {
                                swiperCategoryRef.current = swiper;
                            }}
                            spaceBetween={0}
                            slidesPerView={1}
                            breakpoints={{
                                1280: {
                                    spaceBetween: 20,
                                    slidesPerView: 2,
                                }
                            }}
                            onSlideChange={() => setActiveNavCate([swiperCategoryRef.current.isBeginning,swiperCategoryRef.current.isEnd])}
                            modules={[Autoplay, Pagination, Navigation]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                        >
                            {listCategory.map((item, index) =>
                                <SwiperSlide key={index}>
                                  <CategoryCard item={item}/>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="body-category-button-wrap">
                            <button>
                                <p>Load More</p>
                                <img src={plus} alt="icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body;