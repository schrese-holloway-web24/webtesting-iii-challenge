// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import {toHaveClass} from '@testing-library/jest-dom';
expect.extend({toHaveClass})
//Component
import Display from './Display';

test('Display renders without crashing', () => {
    render(<Display />)
})

test('if locked is true, render test locked, if locked is false, render unlocked', () => {
    const {getByText, rerender} = render(<Display locked = {true} />)
    getByText(/locked/i);

    rerender(<Display locked = {false} />)
    getByText(/unlocked/i)
    
    // rerender(<Display locked = {false} />)
    // const open = getByTestId(/opener/i)
    // expect(unlocked).toHaveClass('lockedClass')
    // expect(open).toHaveTextContent(/open/i)
})

test('closed is true, render closed, if closed is false, render open', () => {
    const {getByText, rerender} = render(<Display closed = {true} />)
    getByText(/closed/i)

    rerender(<Display closed = {false} />)
    getByText(/open/i)
})


//CANNOT GET RED-LED CLASS TO WORK
test('locker testid should have classname red-led if locked', () => {
    render(<Display locked = {true}/>)
    const lockerDiv = document.querySelector('[data-testid = "locker"]')
    expect(lockerDiv).toHaveClass('led', 'red-led')
})

test('red-led when open',() =>  {
    render(<Display closed /> )
    const openerDiv = document.querySelector('[data-testid = "opener"]')
    expect(openerDiv).toHaveClass('led', 'red-led')
})

test('locker testid should have classname green-led if not locked', () => {
    render(<Display locked = {false}/>)
    const lockerDiv = document.querySelector('[data-testid = "locker"]')
    expect(lockerDiv).toHaveClass('led', 'green-led')
})

test('green-led when open',() =>  {
    render(<Display closed = {false} /> )
    const openerDiv = document.querySelector('[data-testid = "opener"]')
    expect(openerDiv).toHaveClass('led', 'green-led')
})