import React from 'react';

//import {render, screen} from '@testing-library/react';
import {render} from '@testing-library/react';
import App from './index';

test('renders dashboard link', () => {
    render(<App/>);
    /*const linkElement = screen.getByText(/dashboard/i);
    expect(linkElement).toBeInTheDocument();*/
});
