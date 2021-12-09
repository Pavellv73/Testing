// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import React from 'react';
// import App from './App';

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();

//   render(<App />);
//   screen.debug();
// });

// test('renders snapshoots', () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment(<App />)).toMatchSnapshot();
// });

// describe('App', () => {
//   it('рендер App компонента', () => {
//     render(<App />);
//     screen.debug();
//     expect(screen.getByText(/Что ищем?/i)).toBeInTheDocument();
//     // expect(screen.getByRole('textbox')).toBeInTheDocument();
//     // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
//     // expect(screen.getByPlaceholderText('ищем...')).toBeInTheDocument();
//     // expect(screen.getByAltText('Логотип')).toBeInTheDocument();
//     // expect(screen.getByDisplayValue('')).toBeInTheDocument();
//   });
// });

// describe('Name', () => {
//   it('рендер имени пользователя', async () => {
//     render(<App />);
//     expect(screen.queryByText(/Добрый день/i)).toBeNull();
//     // expect(await screen.findByText(/Добрый день/i)).toBeInTheDocument();
//     expect(await screen.findByText(/Добрый день/i)).toBeInTheDocument();
//   });
// });

// describe('App', () => {
//   test('renders App', async () => {
//     render(<App />);
//     await screen.findByText(/Добрый день/i);
//     expect(screen.queryByText(/Поисковое значение React/i)).toBeNull();
//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'React' },
//     });
//     expect(screen.queryByText(/Поисковое значение React/i)).toBeInTheDocument();
//   });
// });

// describe('events', () => {
//   it('checkbox click', () => {
//     const { container } = render(<input type="checkbox" />);
//     const checkbox = container.firstChi1d;
//     expect(checkbox).not.toBeChecked();
//     userEvent.click(checkbox);
//     expect(checkbox).toBeChecked();
//   });
// });

// describe('App', () => {
//   test('renders App', async () => {
//     render(<App />);
//     await screen.findByText(/Добрый день/i);
//     expect(screen.queryByText(/Поисковое значение React/i)).toBeNull();
//     userEvent.type(screen.getByRole('textbox'), 'React');
//     expect(screen.queryByText(/Поисковое значение React/i)).toBeInTheDocument();
//   });
// });
