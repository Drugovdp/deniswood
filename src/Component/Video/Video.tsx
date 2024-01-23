import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import './Video.scss'

import video1 from '../../video/video1.mp4'
import video2 from '../../video/video2.mp4'

export const Video = () => {

    const [disabledVideo, setDisabledVideo] = useState(true)

    const onClickPlayHandler = () => {
        setDisabledVideo(!disabledVideo)
    }

    return (
        <section className='sectionVideo'>
            <div className='sectionVideoWrapper'>
                <div className="videoTitle">
                    <h1><span>Wood Art</span> - искусство</h1>
                    <p>Создания красивых эффектов, таких как реки и водопады в столешницах - добавляет уникальный и современный вид традиционному деревянному изделию, делая его неповторимым и привлекательным.</p>
                </div>
                <div className='sectionVideoWrapperVideos'>
                    <div className='itemVideo' onClick={onClickPlayHandler}>
                        {!disabledVideo && <div className='previwe'></div>}
                        <ReactPlayer
                            url={video2}
                            playing={disabledVideo ? true : false}
                            loop={false}
                            controls={disabledVideo ? true : false}
                            volume={0.1}
                            muted={false}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='itemVideo' onClick={onClickPlayHandler}>
                        {disabledVideo && <div className='previwe'></div>}
                        <ReactPlayer
                            url={video1}
                            playing={disabledVideo ? false : true}
                            loop={false}
                            controls={disabledVideo ? false : true}
                            volume={0.1}
                            muted={false}
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
