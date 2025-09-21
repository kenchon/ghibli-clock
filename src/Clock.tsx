import React, { useContext } from 'react'
import styled from 'styled-components'
import { ClockContext } from './App'

let imgHeight = window.innerHeight


const Clock: React.FC = () => {
    const currentTime = useContext(ClockContext)
    // orientationchangeでリロードはUX的に避ける
    return (
        <StyledClock>
            <div className="clock-bg">
                <span className="date">{currentTime.toLocaleDateString().replace(/\//g, ' ')}</span>
                <span className="time">{currentTime.toLocaleTimeString()}</span>
            </div>
        </StyledClock>
    )
}

export default Clock

const StyledClock = styled.div`
    font-family: "Gas", monospace, sans-serif;
    .clock-bg {
        background: rgba(0,0,0,0.45);
        border-radius: 32px;
        padding: 32px 48px;
        box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
        display: flex;
        flex-direction: column;
        align-items: center;
        backdrop-filter: blur(2px);
        min-width: 420px;
        min-height: 180px;
        transition: min-width 0.2s;
    }
    .date {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 12px;
        text-shadow: 2px 2px 8px #000, 0 0 8px #000;
        font-family: inherit;
        font-variant-numeric: tabular-nums;
    }
    .time {
        font-size: 6rem;
        color: #fff;
        text-shadow: 2px 2px 12px #000, 0 0 12px #000;
        letter-spacing: 0.05em;
        font-family: inherit;
        font-variant-numeric: tabular-nums;
    }
    @media (max-width: 600px) {
        .clock-bg {
            padding: 16px 8px;
            min-width: 180px;
            min-height: 80px;
        }
        .date {
            font-size: 1.2rem;
        }
        .time {
            font-size: 2.5rem;
        }
    }
`

