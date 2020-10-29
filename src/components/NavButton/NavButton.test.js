import React from 'react'
import ReactDOM from 'react-dom'
import NavButton from './NavButton'
import { BrowserRouter } from 'react-router-dom'

it('NavButton Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <NavButton />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});