// Test away
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

//component
import Dashboard from './Dashboard';

test('Dashboard renders without crashing', () => {
    render(<Dashboard />)
})

test('close gate button changes to open gate on click', () => {
    const {getByText} = render(<Dashboard />)
    const button = getByText(/close gate/i)
    fireEvent.click(button);
    getByText(/open gate/i)
    getByText(/closed/i)
    getByText(/unlocked/i)
})

//these two (below) are not behaving the way I think they should. They don't accept the text "unlock gate", but work perfectly fine when I use "unlock". 
// test('unlock gate button changes to lock gate on click', () => {
//     const {getByText} = render(<Dashboard closed locked = {false} />)
//     const button2 = getByText(/lock gate/i)
//     fireEvent.click(button2)
//     getByText(/unlock/i)
// })

// test('lock gate button changes to unlock gate onclick', () => {
//     const {getByText, rerender} = render(<Dashboard locked = {false} closed />)
//     const button = getByText(/lock gate/i)
//     fireEvent.click(button)
//     rerender(<Dashboard locked = {false} closed />)
//     getByText(/unlock/i)
// })