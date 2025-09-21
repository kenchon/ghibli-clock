import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import { ClockContext } from './App'
import photoURLs from './ghibli-photo-urls'


const Photo: React.FC = () => {
    const [currentImgSrc, setCurrentImgSrc] = useState(() => getRandomGhibliPhoto())
    const [fade, setFade] = useState(true)
    const [showOverlay, setShowOverlay] = useState(false)
    const currentTime = useContext(ClockContext)

    // 画像を毎分0秒で切り替え、黒フェードアニメーション
    useEffect(() => {
        const sec = currentTime.getSeconds()
        if (sec === 0) {
            setShowOverlay(true)
            setTimeout(() => {
                setCurrentImgSrc(getRandomGhibliPhoto())
            }, 350)
            setTimeout(() => {
                setShowOverlay(false)
            }, 700)
        }
    }, [currentTime])

    return (
        <StyledPhoto>
            <img className={fade ? 'fade-in' : 'fade-out'} src={currentImgSrc} alt={"Clock"} />
            <BlackOverlay className={showOverlay ? 'show' : ''} />
            <ClockContainer>
                <Clock />
            </ClockContainer>
        </StyledPhoto>
    )
}

export default Photo

const StyledPhoto = styled.div`
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 1;
    overflow: hidden;
    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        transition: opacity 0.7s;
        position: absolute;
        top: 0; left: 0;
        &.fade-in { opacity: 1; }
        &.fade-out { opacity: 0; }
    }
`

const BlackOverlay = styled.div`
    position: absolute;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.85);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.7s;
    z-index: 2;
    &.show {
        opacity: 1;
    }
`

const ClockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    pointer-events: none;
`
const getRandomGhibliPhoto = () => {
    return photoURLs.chihiro[getRandomInt(50)]
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max-1));
}