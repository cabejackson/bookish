import React from 'react'
import ReactDOM from 'react-dom'
import TBRGame from './TBRGame'
import { BrowserRouter } from 'react-router-dom'

it('TBRGame Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <TBRGame />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});