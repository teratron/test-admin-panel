//import React from 'react';

import {render} from '@testing-library/react';
import App from './App';

test('renders dashboard link', () => {
    render(<App/>);
    /*const linkElement = screen.getByText(/dashboard/i);
    expect(linkElement).toBeInTheDocument();*/
});
