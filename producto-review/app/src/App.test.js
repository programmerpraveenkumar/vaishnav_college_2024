import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('test for home.js',()=>{
  render(<Home/>);
  const linkElement = screen.getByText(/Categories/i);
  expect(linkElement).toBeInTheDocument();
});

test('test2', () => {
  render(<Home />);
  const element = screen.getAllByTestId("test2")
  expect(element[0]).toBeInTheDocument();
});

// test('test2', () => {
//   render(<Home />);
//   const linkElement = screen.getByText(/Categories/i);
//   const element = screen.getAllByTestId("test2")
//   expect(element[0]).toBeInTheDocument();
// });