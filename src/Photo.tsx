import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import { ClockContext } from './App'
import photoURLs from './ghibli-photo-urls'

const Photo: React.FC = () => {

    let imgWidth = window.innerWidth
    let imgHeight = window.innerHeight

    const currentTime = useContext(ClockContext)

    // TODO: currentImgSrc の値を変えない方法で，<img> を再描画する方法を使用する
    // TODO: 00秒ちょうどに画像が切り替わるようにする（ƒetchに3秒ぐらい時間がかかる）
    
    const [currentImgSrc, setCurrentImgSrc] = useState(()=> getRandomGhibliPhoto())

    useEffect(() => {
        return function cleanup(){
            if(currentTime.toLocaleTimeString().slice(6, 9) === "00") {
                setCurrentImgSrc(getRandomGhibliPhoto())
            }
        };
    })

    return (
        <StyledPhoto>
            <Clock />
            <img width={imgWidth} height={imgHeight} src={currentImgSrc} alt={"Clock"}/>
        </StyledPhoto>
    )
}

export default Photo

const StyledPhoto = styled.div`
    z-index: 1;
    img {
        object-fit: cover;
    }
`
const getRandomGhibliPhoto = () => {
    return photoURLs.chihiro[getRandomInt(50)]
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max-1));
}