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
        <div>
            <StyledClock>
                <ul>
                    <li><span id="date">{currentTime.toLocaleDateString()}</span></li>
                    <li><span id="time">{currentTime.toLocaleTimeString()}</span></li>
                </ul>
            </StyledClock>
        </div>
    )
}

export default Clock

const StyledClock = styled.div`
    /* font styles */
    font-family: Courier New;
    font-weight: 900;
    z-index: 2;
    top: ${imgHeight/2 - 80}px;

    text-shadow: 2px 2px 0 #FFF, -2px -2px 0 #FFF,
              -2px 2px 0 #FFF, 2px -2px 0 #FFF,
              0px 2px 0 #FFF,  0-2px 0 #FFF,
              -2px 0 0 #FFF, 2px 0 0 #FFF;

    #time {
        font-size: 150px;
    }

    #date {
        font-size: 60px;
    }

    /* positional styles*/
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute; /* necessary for overlay*/ 
    flex: 1;
    align-self: 'absolute';

    ul {
        list-style: none;
    }
`

