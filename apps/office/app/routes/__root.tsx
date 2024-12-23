import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Meta, Scripts } from '@tanstack/start'

// Containers
import { NotFoundContainer, DefaultCatchBoundaryContainer } from '@/containers'

// Styling
import '@pigment-css/react/styles.css'
import reset from '@monorepo/styling/reset?url'

// Utils
import { seo } from '@/utils/seo'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            ...seo({
                title: 'Pigment',
                description: `Pigment.`,
            }),
        ],
        links: [{ rel: 'stylesheet', href: reset }],
    }),
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundaryContainer {...props} />
            </RootDocument>
        )
    },
    notFoundComponent: () => <NotFoundContainer />,
    component: RootComponent,
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    )
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <Meta />
            </head>
            <body>
                {children}

                <ScrollRestoration />
                <TanStackRouterDevtools position="bottom-right" />
                <Scripts />
            </body>
        </html>
    )
}
