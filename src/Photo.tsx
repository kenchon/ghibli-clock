import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'

const Photo: React.FC = () => {

    const imgWidth = window.innerWidth
    const imgHeight = window.innerHeight
    const imgSrc = `https://loremflickr.com/${imgWidth}/${imgHeight}/cat`

    return (
        <StyledPhoto>
            <Clock />
            <img width={imgWidth} height={imgHeight} src={imgSrc}/>
        </StyledPhoto>
    )
}

export default Photo

const StyledPhoto = styled.div`
    z-index: 1;
`
