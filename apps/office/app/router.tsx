import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundaryContainer, NotFoundContainer } from './containers'

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        defaultPreload: 'intent',
        defaultErrorComponent: DefaultCatchBoundaryContainer,
        defaultNotFoundComponent: () => <NotFoundContainer />,
    })

    return router
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
