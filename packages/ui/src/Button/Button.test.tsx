import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('forwards ref to the DOM element', () => {
        const ref = createRef<HTMLDivElement>();
        render(<Button ref={ref}>Test Content</Button>);
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('renders correctly', () => {
        const { container } = render(<Button>Test Content</Button>);
        expect(container.firstChild).toHaveTextContent('Test Content');
    });
});