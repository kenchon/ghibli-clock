import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
    font-size: 50px;
    font-weight: 900;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    flex: 1;
    align-self: 'absolute';
    align-items: 'center';
    justify-content: 'center';
    text-shadow: 1px 1px 0 #FFF, -1px -1px 0 #FFF,
              -1px 1px 0 #FFF, 1px -1px 0 #FFF,
              0px 1px 0 #FFF,  0-1px 0 #FFF,
              -1px 0 0 #FFF, 1px 0 0 #FFF;
`
