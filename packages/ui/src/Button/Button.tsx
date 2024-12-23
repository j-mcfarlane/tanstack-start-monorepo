import React, { forwardRef, PropsWithChildren, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    // Add specific props here
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
    ({ children, ...rest }, ref) => {
        return (
            <button ref={ref} {...rest}>
                {children}
            </button>
        );
    }
);
