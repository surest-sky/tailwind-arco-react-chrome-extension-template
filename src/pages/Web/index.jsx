import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'


render(
    <App />,
    window.document.querySelector('#app-web'),
)

if (module.hot) module.hot.accept()
