// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

//component
import Controls from './Controls';

test('Controls render without crashing', () => {
    render(<Controls />)
})

test('renders Unlock Gate if locked, otherwise displays Lock Gate', () => {
    const {getByText, rerender} = render(<Controls locked />)
    getByText(/unlock gate/i)

    rerender(<Controls locked = {false} />)
    getByText(/lock gate/i)
})

test('renders Open Gate if closed, otherwise displays Close Gate', () => {
    const {getByText, rerender} = render(<Controls closed />)
    getByText(/open gate/i)

    rerender(<Controls closed = {false} />)
    getByText(/close gate/i)
})

test('lock gate button changes to unlock gate onclick', () => {
    const {getByText, rerender} = render(<Controls />)
    const button = getByText(/lock gate/i)
    fireEvent.click(button)
    rerender(<Controls locked = {false} closed />)
    getByText(/unlock gate/i)
})