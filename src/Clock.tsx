import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

let imgHeight = window.innerHeight

const Clock:React.FC = () => {

    const [currentTime, setCurrentTime] = useState(() => new Date())
    useEffect(() => {
        let timerId = setInterval(()=>tick(),1000);
        return function cleanup(){
            clearInterval(timerId);
        };
    })

    window.addEventListener("orientationchange", () => {
        window.location.reload()
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
    /* basic font styles */
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

    /* config for mobile device */
    @media (orientation: landscape) {
        /* TODO: Use dynamic 'top' value */
        top: ${imgHeight/2 - 120}px;
    }

    @media (orientation: portrait) {
        #time {
            font-size: 60px;
        }

        #date {
            font-size: 40px;
        }

         /* TODO: Use dynamic 'left' value */
        left: -30px;

        /* positional styles*/
        top: ${imgHeight/2 - 80}px;
    }
`

