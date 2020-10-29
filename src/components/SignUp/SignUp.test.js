import React from 'react'
import ReactDOM from 'react-dom'
import SignUp from './SignUp'
import { BrowserRouter } from 'react-router-dom'

it('SignUp Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});