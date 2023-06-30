import { render, screen } from '@testing-library/react';
import  Greeting  from './Greeting';


test('renders Hello World ad a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();

})