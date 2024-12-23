import React from 'react'

import { Button } from '@monorepo/ui/button'

// Styling
import { Layout } from './LandingContainer.styled'

export function LandingContainer() {
    return (
        <Layout.Root>
            <Button
                onClick={() => {
                    document.documentElement.classList.toggle('theme-dark')
                }}
            >
                Toggle color scheme
            </Button>
        </Layout.Root>
    )
}
