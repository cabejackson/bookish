import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import { BrowserRouter } from 'react-router-dom'

it('Card Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Card />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});