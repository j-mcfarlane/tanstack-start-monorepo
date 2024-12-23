import { ErrorComponent, Link, rootRouteId, useMatch, useRouter } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'

export function DefaultCatchBoundaryContainer({ error }: ErrorComponentProps) {
    const router = useRouter()
    const isRoot = useMatch({
        strict: false,
        select: (state) => state.id === rootRouteId,
    })

    return (
        <div>
            <ErrorComponent error={error} />

            <div>
                <button
                    onClick={() => {
                        router.invalidate()
                    }}
                >
                    Try Again
                </button>
                {isRoot ? (
                    <Link to="/">Home</Link>
                ) : (
                    <Link
                        to="/"
                        onClick={({ preventDefault }: { preventDefault: () => void }) => {
                            preventDefault()
                            window.history.back()
                        }}
                    >
                        Go Back
                    </Link>
                )}
            </div>
        </div>
    )
}
