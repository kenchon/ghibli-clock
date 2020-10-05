import React from 'react'
import styled from 'styled-components'

const Clock:React.FC = () => {
    return (
        <StyledClock>
            <span>{Date()}</span>
        </StyledClock>
    )
}

export default Clock

const StyledClock = styled.div`
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
`
