//src/__tests__/App.test.js

import { render, screen } from '@testing-library/react'
import App from "../App"

test('renders a  component', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i); //assuming helloworld text is present
    expect(linkElement).toBeInTheDocument();
})