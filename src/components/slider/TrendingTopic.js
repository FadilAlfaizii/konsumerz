'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    // Navigation
    navigation: {
        prevEl: ".swiper-button-prev-style-2",
        nextEl: ".swiper-button-next-style-2",
    },

    //responsive
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}

const TrendingTopic = () => {

    const data = [
        {
            title: "Sport",
            article: 38,
            img: "sport.png",
        },
        {
            title: "Travel",
            article: 63,
            img: "travel.png",
        },
        {
            title: "Design",
            article: 78,
            img: "design.png",
        },
        {
            title: "Movie",
            article: 125,
            img: "movie.png",
        },
        {
            title: "Lifestyle",
            article: 45,
            img: "lifestyle.png",
        },
    ];

    return (
        <>
            <div className="swiper-container swiper-group-6">
                <Swiper  {...swiperOptions} className="swiper-wrapper">
                    {data.map((item, i) => (
                        <SwiperSlide className="swiper-slide" key={i}>
                            <div className="card-style-1">
                                <Link href="/blog-archive">
                                    <div className="card-image">
                                        <Image width={190} height={235} src={`/assets/imgs/page/homepage1/${item.img}`} alt="Genz" />

                                        <div className="card-info">
                                            <div className="info-bottom">
                                                <h6 className="color-white mb-5">{item.title}</h6>
                                                <p className="text-xs color-gray-500"> {item.article} Articles</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-prev swiper-button-prev-style-2" />
                <div className="swiper-button-next swiper-button-next-style-2" />
            </div>
        </>
    );
};

export default TrendingTopic;

