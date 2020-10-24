import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import { ClockContext } from './App'

const Photo: React.FC = () => {

    let imgWidth = window.innerWidth
    let imgHeight = window.innerHeight
    let imgSrc = `https://loremflickr.com/${imgWidth}/${imgHeight}/cat`

    const currentTime = useContext(ClockContext)

    // TODO: currentImgSrc の値を変えない方法で，<img> を再描画する方法を使用する
    // TODO: 00秒ちょうどに画像が切り替わるようにする（ƒetchに3秒ぐらい時間がかかる）
    
    const [currentImgSrc, setCurrentImgSrc] = useState(()=> `https://loremflickr.com/${imgWidth}/${imgHeight}/cat`)
    const [nextImgSrc, setNextImgSrc] = useState(()=> `https://loremflickr.com/${imgWidth}/${imgHeight}/cat`)

    useEffect(() => {
        return function cleanup(){
            console.log(`clean up function: ${currentTime}`)
            if(currentTime.toLocaleTimeString().slice(6, 9) == "00") {
                setCurrentImgSrc(`https://loremflickr.com/${imgWidth}/${imgHeight}/cat?=${currentTime}`)
            }
        };
    })

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
