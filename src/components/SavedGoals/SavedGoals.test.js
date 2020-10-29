import React from 'react'
import ReactDOM from 'react-dom'
import SavedGoals from './SavedGoals'
import { BrowserRouter } from 'react-router-dom'

it('SavedGoals Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <SavedGoals />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});