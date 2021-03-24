import React, { useContext } from 'react'
import styled from 'styled-components'
import { ClockContext } from './App'

let imgHeight = window.innerHeight

const Clock:React.FC = () => {

    const currentTime = useContext(ClockContext)

    // Reload this component when screen is rotated to update CSS
    window.addEventListener("orientationchange", () => {
        window.location.reload()
    })

    return (
        <div>
            <StyledClock>
                <ul>
                    <li><span id="date">{currentTime.toLocaleDateString().replace(/\//g, ' ')}</span></li>
                    <li><span id="time">{currentTime.toLocaleTimeString()}</span></li>
                </ul>
            </StyledClock>
        </div>
    )
}

export default Clock

const StyledClock = styled.div`
    /* basic font styles */
    font-family: "Gas";
    z-index: 2;
    top: ${imgHeight/2 - 80}px;
    float: right;
    text-align: left;

    text-shadow: 2px 2px 0 #000, -2px -2px 0 #000,
              -2px 2px 0 #000, 2px -2px 0 #000,
              0px 2px 0 #000,  0-2px 0 #000,
              -2px 0 0 #000, 2px 0 0 #000;

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

