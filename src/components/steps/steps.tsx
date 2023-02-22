import React from 'react'
import { StepsProps } from "./styles"

interface StepsWithProps {
    index:   number;
    active: boolean;
}

export function Steps ({ active, index }: StepsWithProps) {
    return (
        <StepsProps activeProperty={active}>
            {index}
        </StepsProps>
    )
}
