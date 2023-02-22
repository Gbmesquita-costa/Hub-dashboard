import React, { ReactNode } from 'react'

import { SideBarLinks, Text } from "./styles"

interface NavSectionProps {
    title: string;
    children: ReactNode
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <div>
            <Text>{title}</Text>
            <SideBarLinks>
                { children }
            </SideBarLinks>
        </div>
    )
}
