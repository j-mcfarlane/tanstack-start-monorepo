import { createFileRoute } from '@tanstack/react-router'

import { LandingContainer } from '@/containers'

export const Route = createFileRoute('/')({
    component: LandingContainer,
})
