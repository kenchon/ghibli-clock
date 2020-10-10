import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const imgHeight = window.innerHeight

const Clock:React.FC = () => {

    const [currentTime, setCurrentTime] = useState(() => new Date())
    useEffect(() => {
        let timerId = setInterval(()=>tick(),1000);
        return function cleanup(){
            clearInterval(timerId);
        };
    })

    function tick() {
        setCurrentTime(new Date());
    }

    return (
        <StyledClock>
            <span>{currentTime.toLocaleTimeString()}</span>
        </StyledClock>
    )
}

export default Clock

const StyledClock = styled.div`
    font-family: Courier New;
    font-size: 150px;
    font-weight: 900;
    z-index: 2;
    top: ${imgHeight/2 - 80}px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute; /* necessary for overlay*/ 
    flex: 1;
    align-self: 'absolute';
    text-shadow: 2px 2px 0 #FFF, -2px -2px 0 #FFF,
              -2px 2px 0 #FFF, 2px -2px 0 #FFF,
              0px 2px 0 #FFF,  0-2px 0 #FFF,
              -2px 0 0 #FFF, 2px 0 0 #FFF;
`
