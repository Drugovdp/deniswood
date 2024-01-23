import React from 'react'
import ReactPlayer from 'react-player'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './VideoSlider.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import video1 from '../../video/video1.mp4'
import video2 from '../../video/video2.mp4'
import logoWhite from '../../images/logoWhite.jpg'

export const VideoSlider = () => {
    return (
        <div className='videoSlider'>
            <div className="videoTitle">
                <h1><span>Wood Art</span> - искусство</h1>
                <p>Создания красивых эффектов, таких как реки и водопады в столешницах - добавляет уникальный и современный вид традиционному деревянному изделию, делая его неповторимым и привлекательным.</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                navigation
            >
                <SwiperSlide>
                    {({ isActive }) => (
                        <ReactPlayer
                            url={video2}
                            playing={isActive ? true : false}
                            loop={false}
                            controls={true}
                            volume={0.5}
                            muted={false}
                            width='100%'
                            height='100%'
                        />
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <ReactPlayer
                            url={video1}
                            playing={isActive ? true : false}
                            loop={false}
                            controls={true}
                            volume={0.5}
                            muted={false}
                            width='100%'
                            height='100%'
                        />
                    )}
                </SwiperSlide>
            </Swiper>
            <div className='logoFutterSlider'>
                <img src={logoWhite} alt="logoWhite" />
            </div>
        </div>
    )
}
