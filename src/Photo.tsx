import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Clock from './Clock'

const Photo: React.FC = () => {

    let imgWidth = window.innerWidth
    let imgHeight = window.innerHeight
    let imgSrc = `https://loremflickr.com/${imgWidth}/${imgHeight}/cat`

    // TODO: Clock でグローバルな currentTime を定義して，これを参照するようにする
    // TODO: currentImgSrc の値を変えない方法で，<img> を再描画する方法を使用する
    const [currentTime, setCurrentTime] = useState(() => new Date())
    const [currentImgSrc, setCurrentImgSrc] = useState(()=> `https://loremflickr.com/${imgWidth}/${imgHeight}/cat`)

    useEffect(() => {
        let timerId = setInterval(()=>tick(),1000);
        return function cleanup(){
            clearInterval(timerId);
            if(currentTime.toLocaleTimeString().slice(6, 9) == "00") {
                setCurrentImgSrc(`https://loremflickr.com/${imgWidth}/${imgHeight}/cat?=${currentTime}`)
                console.log(`imgSrc: ${imgSrc}`)
            }
        };
    })

    function tick() {
        setCurrentTime(new Date());
    }

    return (
        <StyledPhoto>
            <Clock />
            <img width={imgWidth} height={imgHeight} src={currentImgSrc}/>
        </StyledPhoto>
    )
}

export default Photo

const StyledPhoto = styled.div`
    z-index: 1;
`
